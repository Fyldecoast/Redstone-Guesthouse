/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://booking-directly.com/widgets/Z6eD6SoPu7GpU8mBBkUvmgXj1zB5lxbm6PX8ymNw522QV2lFnqRrJhW7HBTpL/properties/unit-selection?search_stay_dates=%7B%2522checkInDate%2522:%25222026-06-24%2522,%2522checkOutDate%2522:%25222026-06-25%2522%7D&search_occupancies=%5B%7B%2522numberOfAdults%2522:2,%2522children%2522:%5B%5D%7D%5D',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
