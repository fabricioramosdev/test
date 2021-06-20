export default function ({ store, redirect }) {
  // console.log(route.path)
  // console.log(route.query)
  // console.log(route.name)
  // return redirect('/')
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
