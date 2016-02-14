# wp_icon_manager

Init module
```
LA_IconManager::getInstance();
```

Bind `deleteOption` method to plugin deactivation (optionally). That will delete all fonts from wp_options table and also will reload default fonts on next plugin activation
```
register_deactivation_hook( __FILE__, 'LA_IconManager::deleteOption' );
```

Call function that will be load front-end scripts & styles
```
add_action('wp_enqueue_scripts', 'load_scripts_handler');
```

Inside that function call Icon Manager method, that will be load compiled CSS with icon fonts
```
function load_scripts_handler(){
  LA_IconManager::loadFonts();
}
```
## Icon Manager field format 
Info about Set & Icon stored in one field with delimeter `_####_`
For Example `Font-Awesome_####_heart`

Get icon set name:
```
LA_IconManager::getSet('Font-Awesome_####_heart')
```
will return `Font-Awesome`

Get icon name:
```
LA_IconManager::getSet('Font-Awesome_####_heart')
```
will return `heart`

Get final icon CSS class:
```
LA_IconManager::getIconClass($string, $delimeter = '_####_', $prefix = 'la');
```
