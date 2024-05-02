import { makeAutoObservable } from 'mobx';

class WordStore {
    words = [];
    loading = true;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    fetchWords = async () => {
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            const data = await response.json();
            this.words = data;
        } catch (err) {
            this.error = err.message;
        } finally {
            this.loading = false;
        }
    }

    updateWord = async (id, updatedWord) => {
        const body = {
        id: id,
        english: updatedWord.english,
        transcription: updatedWord.transcription,
        russian: updatedWord.russian,
        tags: "",
        tags_json: "[\"\"]",
        };

        try {
        const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Ошибка обновления слова');
        }

        const updatedWords = this.words.map((word) => (word.id === id ? updatedWord : word));
        this.words = updatedWords;
        } catch (err) {
        console.error(err);
        }
    }

    deleteWord = async (id) => {
        try {
        const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Ошибка удаления слова');
        }
        console.log("DELETE")
        this.words = this.words.filter((word) => word.id !== id);
        } catch (err) {
        console.error(err);
        }
    }

    addWord = async (newWord) => {
        try {
        const response = await fetch('/api/words/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWord),
        });

        if (!response.ok) {
            throw new Error('Ошибка добавления слова');
        }

        const data = await response.json();
        this.words.push(data);
        } catch (err) {
        console.error(err);
        }
    }
}

export default WordStore;