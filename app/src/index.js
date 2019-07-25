import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {PostComponent} from './components/post.component'
import {FavoriteComponent} from './components/favorite.compotent'
import {CreateComponent} from './components/create.component'
import {LoaderComponent} from "./components/loader.component"


new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const post = new PostComponent('posts', {loader})
const favorite = new FavoriteComponent('favorite',{loader})
const create = new CreateComponent('create')

navigation.registerTabs([
  {name: 'create',component: create},
  {name: 'posts',component: post},
  {name: 'favorite',component: favorite}
])


