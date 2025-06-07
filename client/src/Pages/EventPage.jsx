import EventsBackgroundImage from "/Background/EventsBackground.svg";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../api/apiCall';

const CookOff2024 = () => {
    const { id: eventId } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null); // Changed to null for better conditional checking
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); // Added missing error state

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const data = await getAllEvents();
                if (data.error) {
                    setError(true);
                } else {
                    const foundEvent = data.filter((event) => event._id === eventId)[0];
                    setEvent(foundEvent || null); // Handle case where event is not found
                }
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };

        if (eventId) { // Only fetch if eventId exists
            fetchEvents();
        }
    }, [eventId]); // Added eventId as dependency

    if (loading) {
        return (
            <div
                style={{
                    backgroundImage: `url(${EventsBackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="min-h-screen flex items-center justify-center"
            >
                <div className="text-xl font-semibold text-gray-700">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div
                style={{
                    backgroundImage: `url(${EventsBackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="min-h-screen flex items-center justify-center"
            >
                <div className="text-xl font-semibold text-red-600">
                    Error loading event. Please try again.
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundImage: `url(${EventsBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen"
        >
            {!event ? (
                <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                    <div className="text-xl font-semibold text-gray-700">
                        Event not found
                    </div>
                    <Link
                        to="/events"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Events
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4 overflow-hidden container mx-auto mt-16 sm:mt-0 p-4 lg:px-32 lg:pt-4">
                    {/* Back Button */}
                    <Link
                        to="/events"
                        className="self-start mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Events
                    </Link>

                    {/* Main Image */}
                    <div className="flex items-center justify-center h-[60vh] w-full bg-red-400 mb-6 rounded-lg">
                        {/* Placeholder for main image */}
                        <span className="text-white text-lg">Main Event Image</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-7xl font-bold text-gray-700">
                        {event.title}
                    </h1>

                    {/* Date */}
                    {event.date && (
                        <p className="text-gray-600">{formatDate(event.date)}</p>
                    )}

                    {/* Sub heading */}
                    {event.subtitle && (
                        <h2 className="text-base md:text-3xl font-semibold text-gray-700">
                            {event.subtitle}
                        </h2>
                    )}

                    {/* Description */}
                    {event.description && (
                        <p className="text-black text-sm sm:text-base mb-12">
                            {event.description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CookOff2024;