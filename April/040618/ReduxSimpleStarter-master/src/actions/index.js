export function selectBook(book) {
    // selectBook is an Action creator, need to return an action; an object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book,

        console: alert('ohh!')
    };
}