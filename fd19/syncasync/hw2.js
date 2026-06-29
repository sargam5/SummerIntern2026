//    Sequence FOR  an IAS examination

  function Preparation() {
      console.log("preparing for the examination is Rajivnagar");
      
    
  }
  function  main () {
    setTimeout(() => {
        
        console.log("get successful in main");
    }, 10000);
    
    
  }
  function  Interview () {
    setTimeout(() => {
        
        console.log("call for the interview and get success");
    }, 2000);
    
    
  }
  function training(){
    setTimeout(() => {
        
        console.log("Training started and get on position ");
    }, 1000);
    
  } 
  function call(){
    Preparation()
    main()
    Interview()
    training()

  }
  call()





