/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('https://img.freepik.com/free-vector/wave-background_53876-115944.jpg?size=626&ext=jpg&ga=GA1.1.1611739215.1699180316&semt=ais')",
        'nyc' : "url('https://images.pexels.com/photos/1796503/pexels-photo-1796503.jpeg?auto=compress&cs=tinysrgb&w=600')",  
        'nyc1' : "url('https://images.pexels.com/photos/5847376/pexels-photo-5847376.jpeg?auto=compress&cs=tinysrgb&w=600')",  
        'nyc2' : "url('https://images.pexels.com/photos/19342491/pexels-photo-19342491/free-photo-of-statue-of-liberty-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=600')",  
        'nyc3' : "url('https://images.pexels.com/photos/17168401/pexels-photo-17168401/free-photo-of-evening-cityscape-centered-on-empire-state-building-new-york-city-usa.jpeg?auto=compress&cs=tinysrgb&w=600')"  ,
        'paper': "url('https://media.istockphoto.com/id/170616941/photo/a-single-piece-of-torn-newspaper-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=a0eFwZjK32uEAi6wKYIhUsg52uDoOcD1W7lX0QIq8-g=')",
        'caro1': "url('https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'caro2': "url('https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'caro3': "url('https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'caro4': "url('https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'cinnamon1': "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600')",
        'url1': "url('https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBuYXR1cmV8ZW58MHwwfDB8fHww')",
        'url2': "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBuYXR1cmV8ZW58MHwwfDB8fHww')",
        'url3': "url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D')",
        'url4': "url('https://images.unsplash.com/photo-1502740289988-04eddde1556a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwbmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D')",
        'url5': "url('https://media.istockphoto.com/id/175591810/photo/indonesian-pool-villa.webp?b=1&s=170667a&w=0&k=20&c=T_eMRIGy-k51mM98_i5CWvwtNkjQLmEa5uGXRfiRICA=')",
        'url6': "url('https://images.unsplash.com/photo-1466354424719-343280fe118b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwbmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D')",
        'url7': "url('https://images.unsplash.com/photo-1628923139231-55ad0aa6bac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBuYXR1cmV8ZW58MHwwfDB8fHww')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}