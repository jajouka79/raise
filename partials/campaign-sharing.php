<?php 
/**
 * Campaign sharing options.
 *
 * @package Reach
 */

$permalink 	= urlencode( get_the_permalink() );
$title 		= urlencode( get_the_title() );
?>
<ul class="campaign-sharing share horizontal rrssb-buttons">
	<li><h6><?php _e( 'Share', 'reach' ) ?></h6></li>
	<li class="share-twitter">
		<a href="http://twitter.com/home?status=<?php echo $title ?>%20<?php echo $permalink ?>" class="popup icon" data-icon="&#xf099;"></a>
	</li>
	<li class="share-facebook">
		<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $permalink ?>" class="popup icon" data-icon="&#xf09a;"></a>
	</li>
	<li class="share-googleplus">
		<a href="https://plus.google.com/share?url=<?php echo $title . $permalink ?>" class="popup icon" data-icon="&#xf0d5;"></a>
	</li>
	<li class="share-linkedin">
		<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $permalink ?>&amp;title=<?php echo $title ?>" class="popup icon" data-icon="&#xf0e1;"></a>
	</li>
	<li class="share-pinterest">
		<a href="http://pinterest.com/pin/create/button/?url=<?php echo $permalink ?>&amp;description=<?php echo $title ?>" class="popup icon" data-icon="&#xf0d2;"></a>
	</li>
	<li class="share-widget">
		<a href="#campaign-widget-<?php the_ID() ?>" class="icon" data-icon="&#xf121;" data-trigger-modal></a>
		<div id="campaign-widget-<?php the_ID() ?>" class="modal">
			<a class="modal-close"></a>			
			<h4 class="block-title"><?php _e( 'Share Campaign', 'reach' ) ?></h4>
			<div class="block">	
				<?php echo apply_filters( 'the_excerpt', get_theme_mod( 'campaign_sharing_text', '' ) ) ?>
				<p><strong><?php _e( 'Embed Code', 'reach' ) ?></strong></p>
				<pre><?php echo htmlspecialchars( '<iframe src="' . charitable_get_permalink( 'campaign_widget_page' ) . '" width="275px" height="468px" frameborder="0" scrolling="no" /></iframe>' ) ?></pre>
			</div>
			<div class="block iframe-block">
				<p><strong><?php _e( 'Preview', 'reach' ) ?></strong></p>
				<iframe src="<?php echo charitable_get_permalink( 'campaign_widget_page' ) ?>" width="275px" height="468px" frameborder="0" scrolling="no" /></iframe>
			</div>
		</div>
	</li>	
</ul>