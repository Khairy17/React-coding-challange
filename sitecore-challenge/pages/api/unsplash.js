import Unsplash,{toJson} from 'unsplash-js'
import { createApi }from 'unsplash-js'
// let unsplash;
const serverApi = createApi({
    accessKey:"XCBRPySTSTb9f2pkpHVW9e9c3OegDxNBkVbEFwDFDwU"})

    unsplash.photos.get(
        { photoId: '123' })

// export default function(req, res) {
//     console.log("inside requeset")
//     if(!unsplash){
//         unsplash= new Unsplash({
//             accessKey: "XCBRPySTSTb9f2pkpHVW9e9c3OegDxNBkVbEFwDFDwU"

//         });
//     }

  

//     const images = unsplash.photos.getRandom({});

//     console.log(images, "images")

//     return res.status(200).json({images});
//   };
  