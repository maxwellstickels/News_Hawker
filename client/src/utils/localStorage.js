export const getSavedNews = () => {
    const savedNewsId = localStorage.getItem('saved_news')
    ? JSON.parse(localStorage.getItem('saved_news'))
    : [];
    return savedNewsId;
};

export const savedNewsId = (newsIdArr) => {
    if (newsIdArr.length) {
        localStorage.setItem('saved_news', JSON.stringify(newsIdArr));
    } else {
        localStorage.removeItem('saved_news');
    }
};

export const removeNewsId = (newsId) => {
    const savedNewsId = localStorage.getItem('saved_news')
    ? JSON.parse(localStorage.getItem('saved_news'))
    : null;

    if (!savedNewsId) {
        return false;
    }

    const updateSavedNewsId = savedNewsId?.filter((savedNewsId) => savedNewsId !== newsId);
    localStorage.setItem('saved_news', JSON.stringify(updateSavedNewsId));

    return true;
};

