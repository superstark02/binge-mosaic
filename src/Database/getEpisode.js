import { db } from '../firebase'

export default function getEpisode( id, season, episode){
    return new Promise((resolve, reject) => {

        db.collection("Content").doc(id).collection(season).doc(episode)
        .get()
        .then(snapshot => {
            if(snapshot.exists){
                resolve(snapshot.data());
            }
            else{
                resolve("Empty")
            }
        })
        .catch(reason => {
            reject(reason);
        });
    });
}