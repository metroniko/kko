export function renderPosts(post, option = {}) {
  const tag = post.type === 'news'
  ? '<li class="tag tag-blue tag-rounded">Новости</li>'
  : '<li class="tag  tag-rounded">Заметка</li>'
  const button = (JSON.parse(localStorage.getItem('favorites')) || []).map(item => item.id).includes(post.id)
  ? `<button class="button-round button-danger button-small" data-id=${post.id} data-title=${post.title}>Удалить</button>`
  : `<button class="button-round button-primary button-small" data-id=${post.id} data-title=${post.title}>Сохранить</button>`

  return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
        ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${option.option ? button : ''}
      </div>
    </div>  
  `
}