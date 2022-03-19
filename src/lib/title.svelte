<script>
    export let title = "vkrnt.com"
    import '../style/global.css'

	function darkMode(){
		var element = document.body;
		element.className = "dark-mode";
                document.getElementById("dark_mode_button").style.display="none";
                document.getElementById("light_mode_button").style.display= "inline";
	}
	function lightMode() {
		var element = document.body;
		element.className = "light-mode";
                document.getElementById("light_mode_button").style.display="none";
                document.getElementById("dark_mode_button").style.display= "inline";
	}

</script>


<div class="title_box">
   <span> 
      <table class="header_table">
          <tr>
              <td  id="logo">   {title}   </td> 
              <td class="header_table_td"> <a href="/">   Home   </a></td> 
              <td class="header_table_td"> <a href="/about">   About   </a></td> 
              <td class="brightness"> 
                      <span id="dark_mode_button" on:click="{darkMode}" title="dark mode"> &#128526; </span>
                      <span id="light_mode_button" on:click="{lightMode}" title="light mode"> &#129299; </span>
              </td> 
         </tr> 
       </table>
         
 
</div>

<style>
    a{ /* This is specific to title, hence not added to global.css */
       color: #bdbdbd;
       text-decoration: none;
    }

    tr,td{
        border-width: 15px;
        border-style: none;
        padding: 50px;
    }

   #light_mode_button{
      display: none;
      cursor: pointer;
   }

  #light_mode_button:hover{
     font-size: 160%;
  }

  #dark_mode_button{
     cursor: pointer;
  }

  #dark_mode_button:hover {
     font-size: 160%;
  }
  
</style>









