/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        domains:["plus.unsplash.com"]
    },

    redirects: async()=>{
        return[
            {
                source:"/contactus",
                destination:"/userlist",
                permanent:false
            }
        ]
    }
};

export default nextConfig;
