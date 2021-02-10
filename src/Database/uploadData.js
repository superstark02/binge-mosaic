import { db } from "../firebase";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "Hunterrr",
            name: "Hunterrr",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtoTpXkiZEfYfF-W3t8-mfAKHhgaYTIlwURcM_Pjh3NDMZfthT",
            year: "2013",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", "Drama"],
            genre: "Comedy/Drama",
            leng: "2h 21m",
            rate: "12",
            season: 0,
            description: "Mandar is a self-confessed sex addict who is only interested in sex and holds no regards for love or feelings. However, his life changes when he meets Tripti and wishes to settle down with her.",
            trailer:""
        },
        {
            id: "GudduKiGun",
            name: "Guddu Ki Gun",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpbITTQCYEyZAYu2hH4NbO4sX0d-QCmz-BHYaLWobKP8DVDXON",
            year: "2015",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", ""],
            genre: "Comedy/Sex comedy",
            leng: "2h 10m",
            rate: "12",
            season: 0,
            description: "Guddu, a salesman, lands in dire trouble when his girlfriend's grandfather casts a spell on him for cheating on her. However, he must find true love to get rid of the curse.",
            trailer:""
        },
        {
            id: "PhirHeraPheri",
            name: "Phir Hera Pheri",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPsDDAEvZhMvSc9VMru1ro5wWRPNS2EpTSMAvMqZEmxtwE-4aS",
            year: "2006",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", "Bollywood"],
            genre: "Comedy/Bollywood",
            leng: "2h 34m",
            rate: "12",
            season: 0,
            description: "The lives of Raju, Shyam and Baburao change completely when they get cheated by a fraudster. Now, they must find another way to repay the loan they took from a dreaded gangster.",
            trailer:""
        },
        {
            id: "Dhol",
            name: "Dhol",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLLFS2j-vYTNnvZB9rRGpizpH6hVS24lt0OsqaWn6ysFVFKJZO",
            year: "2007",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", "Bollywood"],
            genre: "Comedy/Bollywood",
            leng: "2h 32m",
            rate: "12",
            season: 0,
            description: "Four lazy friends want to make easy money and aim to marry a rich girl. Their plan backfires after they meet Ritu and get embroiled with a dangerous criminal.",
            trailer:""
        },
        {
            id: "Welcome",
            name: "Welcome",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6oH9_g3aQlVaYmhHM7ncy67lIPxNKHWx7jfvLeF70AEjJO8cz",
            year: "2007",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", "Romance"],
            genre: "Comedy/Romance",
            leng: "2h 39m",
            rate: "12",
            season: 0,
            description: "Two thugs meet Rajeev, who belongs to a respectable family, and want to fix their sister's wedding with him. However, when Rajeev's uncle refuses to the match, a series of hilarious situations occur.",
            trailer:""
        },
        {
            id: "Dhamaal",
            name: "Dhamaal",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://daex9l847wg3n.cloudfront.net/shemoutputimages/Dhamaal/5ba8d2bca609d2e15300000f/medium_2_3_1606989125.jpg?1606989846",
            year: "2007",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", ""],
            genre: "Comedy/Bollywood",
            leng: "2h 17m",
            rate: "12",
            season: 0,
            description: "Four lazy friends named Roy, Manav, Aditya and Boman venture out on a race to find a hidden treasure in Goa. However, everything changes when Inspector Kabir enters their lives.",
            trailer:""
        },
        {
            id: "Kissebaaz",
            name: "Kissebaaz ",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlXYGpzri4uJl1TBQpWTP4HO_5M2H8SEROeo1dW9gJ6UuclDw5",
            year: "2019",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Drama", "Mystery"],
            genre: "Drama/Mystery",
            leng: "2h 3m",
            rate: "12",
            season: 0,
            description: "Chuttan Shukla, a convict, says he is innocent and narrates the story of Harsh, a young man who is involuntarily dragged into a huge conspiracy involving a mysterious man named Ram Lal.",
            trailer:""
        },
        {
            id: "GolmaalReturns",
            name: "Golmaal Returns",
            country: "India",
            app: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fshemaroome.png?alt=media&token=42bd4824-ec0a-4d89-bf38-3d7e99dd7a91",
            poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtZSlhlcgFW_cO7GeSQT-2eSvE2EXQLTEuKJ-ZHjNMCHPtIN8E",
            year: "2008",
            keywords: ["Movie", "Bollywood", "SHEMAROO ME", "Comedy", ""],
            genre: "Comedy/Bollywood",
            leng: "2h 15m",
            rate: "12",
            season: 0,
            description: "Gopal, who lives with his wife, Ekta, gets stuck in a yacht for a night after he saves an attractive young woman. Ekta suspects him of having an affair and decides to uncover the truth.",
            trailer:""
        }
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






