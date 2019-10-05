import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nomes: string[] = ['joão', 'maria', 'josé', 'pedro', 'felipe', 'carlos'];

  buscarExemplo4(valor: string) {
    alert(valor);
  }

  nomesFiltro: string[] = ['joão', 'maria', 'josé', 'pedro', 'felipe', 'carlos'];
  buscar(valor: string) {

    //método 1
    for (var i = 0; i < this.nomes.length; i++) {
      if (this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
        this.nomesFiltro.push(this.nomes[i]);
      }
    }

    //método 2
    let temp = [];
    this.nomes.forEach(buscarItem);
    function buscarItem(nome) {
      if (nome.toLowerCase().includes(valor.toLowerCase())) {
        temp.push(nome);
      }
    }
    this.nomesFiltro = temp;

    //método 3
    this.nomesFiltro = this.nomes.filter(function (nome) {
      return nome.toLowerCase().includes(valor.toLowerCase());
    });

    //método 4
    this.nomesFiltro = this.nomes.filter(
      (nome) => nome.toLowerCase().includes(valor.toLowerCase())
    );

  }

  pessoas: any = [
    {id: 1, nome: 'joão', salario: 5000},
    {id: 2, nome: 'maria', salario: 1000},
    {id: 3, nome: 'josé', salario: 2000},
    {id: 4, nome: 'pedro', salario: 3000},
    {id: 5, nome: 'felipe', salario: 10000},
    {id: 6, nome: 'carlos', salario: 800},
  ]

  getValorTotal(): Number {
    return this.pessoas.reduce(
    (soma, pessoa) => soma + pessoa.salario, 0);
  }

  buscarId(id) {
    return this.pessoas.find(pessoa => pessoa.id == id);
  }

  aumentarSalario(percentual) {
    this.pessoas.map(pessoa => pessoa.salario += pessoa.salario * percentual / 100)
  }

  verificaSalario(valor: number) {
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }

  buscaCampos(criterio: string) {
    return this.pessoas.filter((pessoa) =>
      Object.keys(pessoa).some
        (chave => pessoa[chave].toString().includes(criterio)));
  }

  ngOnInitExemplo11() {
    const observable = new Observable(subscriber => {
      subscriber.next(100);
      subscriber.next(2);
      subscriber.next(300);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('Antes de executar subscribe');
    observable.subscribe({
      next(x) {console.log('recebeu o valor ' + x);},
      error(err) {console.log('Err: ' + err);},
      complete() {console.log('terminou o subscribe');}
    });
    console.log('Última linha');
  }

  observable: Observable<string>;
  nomesExemplo12: Array<string> = [];
  ngOnInitExemplo12() {
    this.observable = new Observable(subscriber => {
      setInterval(() => {
        subscriber.next(this.makeId(5));
      }, 1000);
    });
    let lista: Array<string> = [];
    this.observable.subscribe({
      next(x) {lista.push(x);},
      error(err) {alert('ocorreu um erro ' + err);}
    });
    this.nomes = lista;
  }

  enviar(valor: string) {
    this.nomes.push(valor);
  }

  makeId(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  products: any = [];
  title = 'Products';
  ngOnInit(){
    this.products = this.getProducts();
  }
  getProducts() {
    return [
      {id: 1, title: 'Screw Driver', price: 400, stock: 11},
      {id: 2, title: 'Nut Volt', price: 200, stock: 5},
      {id: 3, title: 'Resistor', price: 78, stock: 45},
      {id: 4, title: 'Tractor', price: 20000, stock: 1},
      {id: 5, title: 'Roller', price: 62, stock: 15},
    ];
  }

  productToUpdate: any;
  changeStockValue(p) {
    this.productToUpdate = this.products.find(this.findProducts, [p.id]);
    this.productToUpdate.stock = this.productToUpdate.stock + p.updatedstockvalue;
  }
  findProducts(p) {
    return p.id === this[0];
  }
  
}