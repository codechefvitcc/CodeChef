import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "2e6x5erf",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skiwXyd1N4dGbQr3p1GK1d6eENBeWgFLX6DjppkobW3bX8npVtgjnFNKhNbYlydDH3U8EKUxHBRoiU9ROcf8fxzf0XHgZLyCMrHTz6HEAfwmigvqPxnZvTtLlOCFIW5YIiGydFRrsdbPa58XedlykSoRNN35sQEOq1vhC3NbyibJRdvVV1nR",
});


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client