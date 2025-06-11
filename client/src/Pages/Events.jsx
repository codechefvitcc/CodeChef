import EventsBackgroundImage from "/Background/EventsBackground.svg";
import { useState, useEffect, useMemo } from "react";
import { getAllEvents } from "../api/apiCall";
import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { urlFor } from "../api/apiConfig";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const data = await getAllEvents();
                if (data.error) {
                    setError(true);
                } else {
                    setEvents(data);
                }
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };

        fetchEvents();
    }, []);

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            return event.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description?.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }, [events, searchTerm]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const EventCard = ({ event }) => (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
            <div className="h-48 overflow-hidden">
                {event.imageUrl ? (
                    <img className="w-full" src={urlFor(event.imageUrl).url()} alt={event.title} />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <Calendar className="text-white w-12 h-12" />
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                        {formatDate(event.date)}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {event.title || event.name}
                </h3>

                {event.name && event.title && (
                    <p className="text-gray-600 font-medium mb-2">{event.name}</p>
                )}

                {event.description && (
                    <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                )}

                <Link className="mt-4 pt-4 border-t border-gray-100" to={`/events/${event._id}`}>
                    <button className="w-full bg-gradient-to-r  bg-[#4079da] hover:bg-[#2a67b1] text-white py-2 px-4 rounded-lg transition-all duration-200 font-medium">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading events...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 mb-4">
                        <Calendar className="w-16 h-16 mx-auto mb-2" />
                    </div>
                    <p className="text-gray-600">Failed to load events. Please try again.</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundImage: `url(${EventsBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Events</h1>
                            <p className="text-gray-600 mt-1">{filteredEvents.length} events found</p>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {filteredEvents.length === 0 ? (
                    <div className="text-center py-12">
                        <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                        <p className="text-gray-600">Try adjusting your search</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredEvents.map((event, i) => (
                            <EventCard key={i} event={event} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;