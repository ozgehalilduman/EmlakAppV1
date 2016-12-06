angular.module('starter.services', [])

.factory('Servisler',function($http){
  return{
    KategoriGetir:function(scope){
      var $promise=$http.get("/data/kategori.json");
      $promise.then(function(msg){scope.kategoriler=msg.data});
    },
    EmlakGetir:function(scope){
      var $promise=$http.get("/data/emlaklar.json");
      $promise.then(function(msg){scope.emlaklar=msg.data});
    }
  }
});
