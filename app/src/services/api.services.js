class ApiService {
  constructor(baseURL) {
    this.url = baseURL
  }
  async createPost(post) {
    const request = new Request(this.url + '/posts.json', {
      method: 'post',
      body: JSON.stringify(post)
    })
    return getResponse(request)
  } 
  async getPost() {
    const request = new Request(this.url+ '/posts.json', {
      method: 'get'
    })
    return getResponse(request)
  }
  async fentchPostId(id) {
    const request = new Request(this.url+ `/posts/${id}.json`, {
      method: 'get'
    })
    return getResponse(request)
  }
}
async function getResponse(request) {
  const response = await fetch(request)
  return await response.json()
}
export const apiservice = new ApiService('//frst-firebses.firebaseio.com')