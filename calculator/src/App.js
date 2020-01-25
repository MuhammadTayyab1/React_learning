import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
   
  constructor()
   {
     super();
     this.state={ hold:'',ho1:'',ho2:'',temp:'',op:''}
   }
  

   fnc1()
   {
        this.setState({
          heading:parseInt(this.state.data1)*parseInt(this.state.data2)
        })
   }

   fnc2()
   {
        this.setState({
          heading:parseInt(this.state.data1)-parseInt(this.state.data2)
        })
   }

   fnc3()
   {
        this.setState({
          heading:parseInt(this.state.data1)/parseInt(this.state.data2)
        })
   }
   



   fn1()
   {
        this.setState({
          hold:this.state.hold+"1",
          temp:this.state.temp+"1"
        })
   }
   fn2()
   {
        this.setState({
          hold:this.state.hold+"2",
          temp:this.state.temp+"2"
        })
   }
   fn3()
   {
        this.setState({
          hold:this.state.hold+"3",
          temp:this.state.temp+"3"
        })
   }
   fn4()
   {
        this.setState({
          hold:this.state.hold+"4",
          temp:this.state.temp+"4"
        })
   }
   fn5()
   {
        this.setState({
          hold:this.state.hold+"5",
          temp:this.state.temp+"5"
        })
   }
   fn6()
   {
        this.setState({
          hold:this.state.hold+"6",
          temp:this.state.temp+"6"
        })
   }
   fn7()
   {
        this.setState({
          hold:this.state.hold+"7",
          temp:this.state.temp+"7"
        })
   }
   fn8()
   {
        this.setState({
          hold:this.state.hold+"8",
          temp:this.state.temp+"8"
        })
   }
   fn9()
   {
        this.setState({
          hold:this.state.hold+"9",
          temp:this.state.temp+"9"
        })
   }
   fn0()
   {
        this.setState({
          hold:this.state.hold+"0",
          temp:this.state.temp+"0"
        })
   }

   add()
   {
        this.setState({
          ho1:parseInt(this.state.temp),
          hold:this.state.hold+" + ",
          op:"+",
          temp:''
        })
   }
   mul()
   {
        this.setState({
          ho1:parseInt(this.state.temp),
          hold:this.state.hold+" X ",
          op:"*",
          temp:''
        })
   }
   sub()
   {
        this.setState({
          ho1:parseInt(this.state.temp),
          hold:this.state.hold+" - ",
          op:"-",
          temp:''
        })
   }
   divi()
   {
        this.setState({
          ho1:parseInt(this.state.temp),
          hold:this.state.hold+" / ",
          op:"/",
          temp:''
        })
   }

   clear()
   {
        this.setState({
          ho1:'',
          ho2:'',
          hold:'',
          op:'',
          temp:''
        })
   }

   equal()
   {
        this.setState({
          ho2:parseInt(this.state.temp),
          
        })

        if(this.state.op=="+")
        {
          this.setState({
            hold:((this.state.ho1)+(this.state.ho2))
            
          })
        }
        else if(this.state.op=="*")
        {
          this.setState({
            hold:((this.state.ho1)*(this.state.ho2))
          })
        }
        else if(this.state.op=="-")
        {
          this.setState({
            hold:((this.state.ho1)-(this.state.ho2))
          })
        }
        else if(this.state.op=="/")
        {
          this.setState({
            hold:((this.state.ho1)/(this.state.ho2))
          })
        }
        
   }


  render() 
  {

    return (
       
      <div>
        
         <br /> <input type="text" value={this.state.hold}/>

         

         <button onClick={() => this.add()}> + </button>
         <button onClick={() => this.mul()}> X </button>
         <button onClick={() => this.sub()}> - </button>
         <button onClick={() => this.divi()}> / </button>
         <button onClick={() => this.clear()}> C </button>

         

         <button onClick={() => this.fn1()}> 1 </button>
         <button onClick={() => this.fn2()}> 2 </button>
         <button onClick={() => this.fn3()}> 3 </button>
         <button onClick={() => this.fn4()}> 4 </button>
         <button onClick={() => this.fn5()}> 5 </button>
         <button onClick={() => this.fn6()}> 6 </button>
         <button onClick={() => this.fn7()}> 7 </button>
         <button onClick={() => this.fn8()}> 8 </button>
         <button onClick={() => this.fn9()}> 9 </button>
         <button onClick={() => this.fn0()}> 0 </button>
         
         

         <button onClick={() => this.equal()}> eq </button>
         
         <h2>REACT Jani❤️</h2>
         


         
      
           
    <h2> {this.state.heading}</h2>

      </div>
      
    );
  }
}
export default App;