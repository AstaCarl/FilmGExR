// An asynchronous function to fetch data from a given URL with optional configurations
export async function fetcher(url, options = {}) {
  let response;

  // Check if there are options provided, if not, make a simple fetch request
  if (!options) {
    response = await fetch(url);
  } else {
    // If options are provided, include them in the fetch request
    response = await fetch(url, options);
  }

  // Parse the response as JSON
  const data = await response.json();

  // Return the parsed data
  return data;
}

// Export the fetcher function as the default export
export default fetcher;
