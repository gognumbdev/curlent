/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    devURL:"http://localhost:3000",
    mongoDB_URI:"mongodb+srv://gognumbdev:hGSNbHfUjvkJEg8j@mvp.t5iqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  },
  // domainName:"https://curlent.vercel.app/",

}

module.exports = nextConfig