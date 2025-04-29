import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import EmpForm from '../views/Emp.vue'
import MovieForm from '../views/Movie.vue'
import ToDoForm from '../views/ToDo.vue'
import ParamView from '@/views/ParamView.vue'




const routes = [
  { path: '/', component: HelloWorld },
  { path: '/memberForm', component: MemberForm },
  { path: '/empForm', component: EmpForm },
  { path: '/movieForm', component: MovieForm },
  { path: '/todoForm', component: ToDoForm },
  { path: '/paramView/:username', component: ParamView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;