<?php
/**
 * The sidebar for the Download template.
 *
 * @package Reach
 */

?>
<div id="secondary" class="widget-area sidebar sidebar-download" role="complementary">
    <div class="widget widget-download-purchase">
        <?php echo edd_get_purchase_link( array( 'id' => get_the_ID() ) ) ?>        
    </div>
    <div class="widget widget-download-details">
        <ul class="download-details-list">
            <li class="download-details-list-item">
                <?php
                    $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
                    $time_string = sprintf( $time_string,
                        esc_attr( get_the_date( 'c' ) ),
                        esc_html( get_the_date() ),
                        esc_attr( get_the_modified_date( 'c' ) ),
                        esc_html( get_the_modified_date() )
                    );
                ?>
                <span class="download-detail-name"><?php _e( 'Published:', 'reach' ); ?></span>
                <span class="download-detail-info"><?php echo $time_string; ?></span>
            </li>                
            <?php
            $categories = get_the_term_list( $post->ID, 'download_category', '', ', ', '' );
            if ( '' != $categories ) {
                ?>
                <li class="download-details-list-item">
                    <span class="download-detail-name"><?php _e( 'Categories:', 'reach' ); ?></span>
                    <span class="download-detail-info"><?php echo $categories; ?></span>
                </li>
                <?php
            }

            $tags = get_the_term_list( $post->ID, 'download_tag', '', ', ', '' );
            if ( '' != $tags ) {
                ?>
                <li class="download-details-list-item">
                    <span class="download-detail-name"><?php _e( 'Tags:', 'reach' ); ?></span>
                    <span class="download-detail-info"><?php echo $tags; ?></span>
                </li>
                <?php
            }
            ?>
        </ul>
    </div>
</div>