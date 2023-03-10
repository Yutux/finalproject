export default async function request(url, method, data = {}) {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    });
    return {data: await response.json(), status: response.status};
}