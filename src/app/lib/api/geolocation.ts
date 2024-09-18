// /lib/api/geolocation.ts

export const fetchGeolocation = async () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEOLOCATION_API_KEY;
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        considerIp: true, // Uses the device's IP address
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching location: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch geolocation:", error);
    throw error;
  }
};
