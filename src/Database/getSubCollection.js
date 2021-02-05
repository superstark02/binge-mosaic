import { db } from '../firebase'

export default function getSubCollection(collection , doc, sub_collection){
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(collection).doc(doc).collection(sub_collection)
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

export function getWatching(collection , doc, sub_collection){
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(collection).doc(doc).collection(sub_collection).orderBy('date','desc')
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

