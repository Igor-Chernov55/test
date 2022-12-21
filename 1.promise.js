const getPosts = (method, url, body = null ) => {
    return fetch(url).then(response = > {
        return response.json)
    }
}
getPosts('GET', 'https://jsonplaceholder.typicode.com/todos/1')
