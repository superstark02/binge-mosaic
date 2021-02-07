import { db } from "../firebase";
//import {getByWord} from './getCollectionQuery'

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "OnceUponaTimeinMumbai",
            name: "Once Upon a Time in Mumbai",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Faltbalaji.png?alt=media&token=935ba68c-ba7c-478e-a526-3f43e9575c82",
            poster: "https://m.media-amazon.com/images/M/MV5BNWQzMTQ4ZTYtNzJkMi00OWE5LWEwYjctMTRkY2FhYTJmZWZhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY1200_CR98,0,630,1200_AL_.jpg",
            year: "2010",
            keywords: ["Movie", "Bollywood", "Crime", "Drama", ""],
            genre: "Crime/Drama",
            leng: "2h 15m",
            rate: "5",
            season: 0,
            description: "Two gangsters, Sultan Mirza, the infamous mobster of Mumbai, and Shoaib Khan, who aims to create an image in the underworld, try their best to rule the city on their own terms.",
            trailer:""
        },
    ]

    for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                keywords: data[i].genre,
                poster: data[i].poster,
                year: data[i].year,
                app: data[i].app,
                country: data[i].country,
                leng: data[i].leng,
                season: data[i].season,
                description: data[i].description,
                trailer: data[i].trailer
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

    for (i = 0; i < data.length; i++) {
        db.collection("Index").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                keywords: data[i].keywords,
                poster: data[i].poster,
                year: data[i].year,
                app: data[i].app
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

    /*var episodes = [
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2013%20%5BEnglish%20Sub%5D.mp4?alt=media&token=69e43188-6df0-4c71-b4d1-b923d878fa86",
            date: "Apr 10, 2019",
            name: "Return of the Hero",
        }
    ]

    const cast = [
        {
            id: "kungfupanda",
            cast: [
                {
                    actor: "Jack Black",
                    role: "Po",
                    photo: ""
                }
            ]
        },
    ]*/

    /*for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id).collection('Season-1').doc('episode-01').set({
            content: "",
        }).then(e=>{
            console.log("Done")
        })
    }*/

    /*for (i = 0; i < episodes.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-0" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2Fopmc.jpg?alt=media&token=884968e2-6e52-42a4-a206-4ae0dbd1bbe8",
                name: episodes[i].name,
            }
        }
        else {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2Fopmc.jpg?alt=media&token=884968e2-6e52-42a4-a206-4ae0dbd1bbe8",
                name: episodes[i].name
            }
        }
        db.collection("Content").doc("onepunchman").collection("Season-2").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })

    }*/

    /*getSubCollection("Content", "onepunchman", "Season-2").then(result=>{
        for(var a = 0; a < result.length; a++){
            db.collection("Anime").doc("onepunchman").collection("Season-2").doc(result[a].id).set(result[a]).then(o=>{
                console.log("Done")
            })
        }
    })*/

}

export function uploadApps(){
    const apps = [
        {
            name: "AHA",
            description:"Aha is an Indian over-the-top streaming service owned by Arha Media & Broadcasting Private Limited, a joint venture by Geetha Arts and My Home Group which offers Telugu-language content. Launched officially on March 25, 2020 which was soft launched on January 25, 2020. ",
            plans: "₹199/ 3-months, ₹365/year",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Faha.jpeg?alt=media&token=f4fb1a09-c49a-445d-ae8e-542fea2198c2"
        },
        {
            name: "ALT BALAJI",
            description:"ALTBalaji offers fresh, original and exclusive stories. Tailored especially for Indians across the globe, the platform hosts premium, high quality shows featuring popular celebrities, acclaimed writers, and award winning directors, making ALTBalaji a true alternative to mainstream entertainment.",
            plans: "₹100/ 3-months, ₹180/ 3-months, ₹300/year",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Faltbalaji.png?alt=media&token=935ba68c-ba7c-478e-a526-3f43e9575c82"
        },
        {
            name: "ARRE",
            description:"Arre is an Indian OTT platform based in Mumbai. It produces and publishes videos, audio series, web series, documentaries, text and doodles through its online channel.",
            plans: "Free Content For Public Viewing",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Farre.png?alt=media&token=594075f5-94f6-464b-97b1-a103447e9e81"
        },
        {
            name: "HOICHOI",
            description:"Original Web Series, and Movies Only On Biggest Bengali Entertainment Platform, Hoichoi. Enjoy 2000+ Hours Of Web Series & Movies With Exclusive Content Added Every Month. Low Annual Price. Multiple Devices. Offline Downloads. No Ads.",
            plans: "₹599/year ( 1 Device ), ₹899/year ( 2 Devices )",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fhoichoi.png?alt=media&token=9f0b0739-2da5-4b0d-b222-72912377e5e8"
        },
        {
            name: "SHEMAROO ME",
            description:"Unlimited bollywood movies, TV Serials & Devotional content. Watch high quality old classic movies, TV serials, bollywood music, kids shows in various languages.",
            plans: "₹129/month, ₹299/quater, ₹599/half year, ₹749/year",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91"
        },
        {
            name: "SUN NXT",
            description:"",
            plans: "",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91"
        },
        {
            name: "VIU",
            description:"",
            plans: "",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fviu.png?alt=media&token=a14d7508-48f4-46bb-8ce2-ce4baebe2c15"
        },
        {
            name: "VOOT",
            description:"",
            plans: "",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fvoot.png?alt=media&token=3a85088f-817d-4053-96fb-4d1373ada778"
        },
        {
            name: "YUPPTV",
            description:"",
            plans: "",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fyupptv.png?alt=media&token=14e2dc24-ca48-4151-b7dd-a40898383387"
        },
        {
            name: "ZEE 5",
            description:"",
            plans: "",
            image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fzee5.png?alt=media&token=1d42762f-4b58-4da3-9418-72fa6383a83d"
        },
    ]

    for(var i = 0; i < apps.length; i++){
        db.collection("Apps").doc(apps[i].name).set(apps[i]);
        console.log("Done")
    }
    
}

export function temp(){
    db.collection("Index").get().then(snap=>{
        snap.forEach(doc=>{
            var array = []; array = doc.data().keywords;

            if(doc.data().app === "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fzee5.png?alt=media&token=1d42762f-4b58-4da3-9418-72fa6383a83d"){
                array.push("ZEE5")
                db.collection("Index").doc(doc.id).update({keywords:array}).then(suc=>{
                    console.log("Done")
                })
            }
        })
    })
}





