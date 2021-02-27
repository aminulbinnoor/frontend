export default function ({redirect,route,app}) {
  if(app.$cookies.get('auth') == true){
    return redirect('/')
  }
}
