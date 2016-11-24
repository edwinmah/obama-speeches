# A more perfect union: A curated collection of speeches by President Obama

[![Build Status](https://travis-ci.org/edwinmah/obama-speeches.svg?branch=master)](https://travis-ci.org/edwinmah/obama-speeches)

## Summary

President Obama is one of the finest public speakers and writers of this generation. This site allows users to search and view a curated collection of speeches representing some of his best work, where he inspired us and crafted deft arguments for making our union more perfect.

## Technology used

This site was created with [React](https://facebook.github.io/react/) and the [WordPress REST API](http://v2.wp-api.org/). The primary advantage of using React with the WordPress REST API is that the site, a single-page application, does not have to query the site's WordPress database each time a page is loaded. As a result, the site will respond more quickly to user interaction.

Other software used to create this site include [Redux](http://redux.js.org/), [React Router](https://github.com/ReactTraining/react-router), [Thunk](https://github.com/gaearon/redux-thunk), [Webpack](http://webpack.github.io/docs/), [Mocha](https://mochajs.org/), and [Chai](http://chaijs.com/).

## General procedures followed

1. Perform a [standard WordPress installation](https://codex.wordpress.org/Installing_WordPress).
2. Install and activate the [WordPress REST API plugin](https://wordpress.org/plugins/rest-api/).
3. (Optional) If desired, create a [custom content type](https://codex.wordpress.org/Function_Reference/register_post_type). This step is only necessary if you plan to have content that is not one of the standard WordPress post types (e.g., post, page, attachment, revision).

There are several [custom content type WordPress plugins](https://wordpress.org/plugins/search.php?q=custom+post+type) available that allow you to create custom content types from the WordPress dashboard. Alternatively, you could [create a WordPress plugin](https://codex.wordpress.org/Writing_a_Plugin) using the `register_post_type` WordPress function.

A good resource for WordPress PHP code is [GenerateWP](https://generatewp.com), which is an online tool that will generate the necessary code for most WordPress functions. In addition, a good plugin to use to manage custom plugin code is [Code Snippets](https://wordpress.org/plugins/code-snippets/).

Here is the PHP code that I used to create a "Speeches" custom content type:

	// Register Custom Post Type
	function emah_cpt_speeches() {
	
	  $labels = array(
	    'name'                  => _x( 'Speeches', 'Post Type General Name', 'text_domain' ),
	    'singular_name'         => _x( 'Speech', 'Post Type Singular Name', 'text_domain' ),
	    'menu_name'             => __( 'Speeches', 'text_domain' ),
	    'name_admin_bar'        => __( 'Speeches', 'text_domain' ),
	    'archives'              => __( 'Speeches Archive', 'text_domain' ),
	    'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
	    'all_items'             => __( 'All Speeches', 'text_domain' ),
	    'add_new_item'          => __( 'Add New Speech', 'text_domain' ),
	    'add_new'               => __( 'Add New', 'text_domain' ),
	    'new_item'              => __( 'New Speech', 'text_domain' ),
	    'edit_item'             => __( 'Edit Speech', 'text_domain' ),
	    'update_item'           => __( 'Update Speech', 'text_domain' ),
	    'view_item'             => __( 'View Speech', 'text_domain' ),
	    'search_items'          => __( 'Search Speech', 'text_domain' ),
	    'not_found'             => __( 'Not found', 'text_domain' ),
	    'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
	    'featured_image'        => __( 'Featured Image', 'text_domain' ),
	    'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
	    'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
	    'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
	    'insert_into_item'      => __( 'Insert into speech', 'text_domain' ),
	    'uploaded_to_this_item' => __( 'Uploaded to this speech', 'text_domain' ),
	    'items_list'            => __( 'Speeches list', 'text_domain' ),
	    'items_list_navigation' => __( 'Speeches list navigation', 'text_domain' ),
	    'filter_items_list'     => __( 'Filter speeches list', 'text_domain' ),
	  );
	  $args = array(
	    'label'                 => __( 'Speeches', 'text_domain' ),
	    'description'           => __( 'Speech Items', 'text_domain' ),
	    'labels'                => $labels,
	    'supports'              => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'custom-fields', 'post-formats', ),
	    'taxonomies'            => array( 'category', 'post_tag' ),
	    'hierarchical'          => false,
	    'public'                => true,
	    'show_ui'               => true,
	    'show_in_menu'          => true,
	    'menu_position'         => 5,
	    'menu_icon'             => 'dashicons-portfolio',
	    'show_in_admin_bar'     => true,
	    'show_in_nav_menus'     => true,
	    'show_in_rest'       	=> true,
	    'can_export'            => true,
	    'has_archive'           => true,    
	    'exclude_from_search'   => false,
	    'publicly_queryable'    => true,
	    'capability_type'       => 'post',
	  );
	  register_post_type( 'speeches', $args );
	
	}
	add_action( 'init', 'emah_cpt_speeches', 0 );

4. (Optional) If you want to add custom fields to the JSON response, follow the [instructions for modifying responses](http://v2.wp-api.org/extending/modifying/) in the WordPress REST API documentation and [make note of the `register_rest_field` example](http://v2.wp-api.org/extending/modifying/#how-to-use-registerrestfield).

In my case, I used the following in a plugin to add a "video" field for a YouTube link for each speech:

	add_action( 'rest_api_init', 'slug_register_video' );
	function slug_register_video() {
	  register_rest_field( 'speeches',
		'video',
		array(
		  'get_callback'    => 'slug_get_video',
		  'update_callback' => null,
		  'schema'          => null,
		)
	  );
	}
	
	/**
	 * Get the value of the "video" field
	 *
	 * @param array $object Details of current post.
	 * @param string $field_name Name of field.
	 * @param WP_REST_Request $request Current request
	 *
	 * @return mixed
	 */
	function slug_get_video( $object, $field_name, $request ) {
	  return get_post_meta( $object[ 'id' ], $field_name, true );
	}

## Screenshots

![A more perfect union homepage](screenshots/a-more-perfect-union.png)

Fig. 1 – A more perfect union homepage

***

![Health Care search results](screenshots/health-care-search.png)

Fig. 2 – "Health Care" search results

***

![single speech page](screenshots/inauguration.png)

Fig. 3 – Single speech page

***

![speeches custom content type in WordPress dashboard](screenshots/wordpress-speeches.png)

Fig. 4 – Speeches custom content type in WordPress dashboard



