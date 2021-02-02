import { db } from '../firebase'

/*export default function getNextData(last, filter) {
    return new Promise((resolve, reject) => {
        axios.post("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/next-data", {
            filter: filter,
            last: last
        }).then(result => {
            resolve(result.data)
        }).catch(e => {
            console.log(e);
            reject(null)
        })
    });
}*/

export default function getNextData(name, filter, last) {
    return new Promise((resolve, reject) => {
        var data = [];
        const collection = db.collection(name)
        collection.where('keywords', 'array-contains', filter).orderBy('year', 'desc').startAfter(last).limit(5).get().then(snapshot => {
            if (snapshot.empty) {
                reject(new Error("Empty"))
            }
            else {
                snapshot.forEach(doc => {
                    if (notAnime(doc.data().keywords)) {
                        data.push(doc.data())
                    }
                });
                resolve(data);
            }
            return null;
        }).catch(e => {
            reject(e)
        })
    });
}

export function getCustomQueryNext(name, last, filter) {
    return new Promise((resolve, reject) => {
        var data = [];
        const collection = db.collection(name);

        collection.orderBy('year', 'desc').startAfter(last).get().then(snapshot => {
            if (snapshot.empty) {
                reject(new Error("Empty"))
                return null;
            }
            else {
                snapshot.forEach(doc => {
                    if (search(doc.data().keywords, filter[0]) && search(doc.data().keywords, filter[1])) {
                        if (data.length > 7) {
                            resolve(data);
                            return null;
                        }
                        if (notAnime(doc.data().keywords)) {
                            data.push(doc.data())
                        }
                    }
                });
                resolve(data);
                return null;
            }
        }).catch(e => {
            reject(e)
        })
    });
}

function notAnime(array) {
    for (var k = 0; k < array.length; k++) {
        if (array[k] === "Anime") {
            return false
        }
    }
    return true
}

function search(array, filter) {
    for (var k = 0; k < array.length; k++) {
        if (array[k] === filter) {
            return true
        }
    }
    return false
}
