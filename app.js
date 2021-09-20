let myVue = new Vue({
    el: "#app",
    data(){
        return{
            productos: [
                {nombre: 'manzana', precio:100},
                {nombre: 'sandia', precio:350},
                {nombre: 'frutilla', precio:180},
                {nombre: 'palta', precio:250},
                {nombre: 'papa', precio:120},
                {nombre: 'cebolla', precio:360}
            ] 
        }
    },
    methods:{
        verTodos() {
            this.$refs.mostrar.innerHTML = "";

            this.productos.forEach(prod => {
            let p = document.createElement('p');
            var texto = document.createTextNode(prod.nombre + ', ' + prod.precio);
            p.appendChild(texto);
            this.$refs.mostrar.appendChild(p);
            })
        },
        ordenAlfabetico () {
            this.$refs.mostrar.innerHTML = "";
            let arrayRes = this.productos.slice().sort(function(a, b){
                if (a.nombre > b.nombre) {
                    return 1;
                  }
                  if (a.nombre < b.nombre) {
                    return -1;
                  }
                  return 0;
            });
        
            arrayRes.forEach(prod => {
                this.$refs.mostrar.innerHTML += '<p>' + prod.nombre + ', ' + prod.precio + '</p>';
            })
        },
        ordenPrecio() {
            this.$refs.mostrar.innerHTML = "";
            let arrayRes = this.productos.sort( (a, b) => {
                return b.precio-a.precio;
            });
        
            arrayRes.forEach( prod => {
                this.$refs.mostrar.innerHTML += '<p>' + prod.nombre + ', ' + prod.precio + '</p>';
            }
            )
        },
        filtrar(num) {
            this.$refs.mostrar.innerHTML = "";
            this.productos.forEach(prod => {
                if(prod.precio<=num){
                    this.$refs.mostrar.innerHTML += '<p>' + prod.nombre + ', ' + prod.precio + '</p>';
                }
            })
        }
    }
})