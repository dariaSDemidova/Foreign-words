import { makeAutoObservable } from 'mobx';

class WordStore {
    words = [];
    loading = true;
    error = null;

    constructor() {
        makeAutoObservable(this);
        this.fetchWords();
    }

    async fetchWords() {
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

    async updateWord(id, updatedWord) {
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
        this.error = err.message;
        }
    }

    async deleteWord(id) {
        try {
        const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Ошибка удаления слова');
        }

        this.words = this.words.filter((word) => word.id !== id);
        } catch (err) {
        this.error = err.message;
        }
    }

    async addWord(newWord) {
        try {
        const response = await fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
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
        this.error = err.message;
        }
    }
}

export default WordStore;