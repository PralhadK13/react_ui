var React=require('react');
var DocumentTitle=require('react-document-title');

 //var $=require('jquery');

var App=React.createClass({
 render:function()
 {
   return(
     <DocumentTitle title='Demo App'>
     <div className='App'>
          <Header />
            <div id="Page" style={{"height":"500px;"}}>
             {this.props.children}
            </div>
          <Footer />
      </div>
     </DocumentTitle>
   );
 }

});
module.exports=App;
