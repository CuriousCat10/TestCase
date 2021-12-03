import { instance } from ".";

type CharObject = {
    char_id: number,
    name: string,
    birthday: any,
    occupation: string[],
    img: string,
    status: string,
    appearance: number[],
    nickname: string,
    portrayed: string
};

interface Character {
    id: number,
    name: string, 
    nickname: string, 
    birthdate: any, 
    image: string,
    actor: string,
    appearedIn: number[]
};

export const getCharactersAPI = () => {
    return instance.get(`/characters`)
        .then(response => (response.data.map((ch: CharObject) => ({ 
            id: ch.char_id,
            name: ch.name, 
            nickname: ch.nickname, 
            birthdate: ch.birthday === 'Unknown' ? '-' : ch.birthday, 
            image: ch.img,
            actor: ch.portrayed,
            appearedIn: ch.appearance
        } as Character)
    )))
    .catch(response => {
        if (response.status !== 200) {
            alert("Ошибка запроса");
        } else {
            alert("Неизвестная ошибка");
        }
        throw new Error();
    })
}