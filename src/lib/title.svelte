<script>
    export let title = "vkrnt.com"
    import '../style/global.css'
</script>


<div class="title_box">
   <span> 
      <table class="header_table">
          <tr>
              <td  id="logo">   {title}   </td> 
              <td class="header_table_td"> <a href="/">   Home   </a></td> 
              <td class="header_table_td"> <a href="/about">   About   </a></td> 
          </tr> 
       </table>
          
</div>

<style>
    a{ /* This is specific to title, hence not added to global.css */
       color: #bdbdbd;
       text-decoration: none;
    }
</style>
