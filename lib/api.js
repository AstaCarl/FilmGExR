export async function fetcher(url, options = {}) {
    let response;
    if (!options) {
        response = await fetch(url);
    }
    else {
        response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
};

export default fetcher;

// export default async function fetcher(path) {
//     try {
//       const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_API}`,
//       );
//       const result = await res.json();
//       return result;
//     } catch (error) {}
//     return null;
//   }