<?php
(isset($_GET["name"])) ? $name = filter_var($_GET["name"], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW) : $name = "Paul Willard";
(isset($_GET["title"])) ? $title = filter_var($_GET["title"], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW) : $title = NULL;
(isset($_GET["cell"])) ? $cell = filter_var((int)$_GET["cell"], FILTER_VALIDATE_INT) : $cell = "21638223";
(isset($_GET["workphone"])) ? $workphone = filter_var((int)$_GET["workphone"], FILTER_VALIDATE_INT) : $workphone = "8008480038";
(isset($_GET["email"])) ? $email = filter_var($_GET["email"], FILTER_VALIDATE_EMAIL) : $email = "paul@centralcomms.nz";
$url = "https://www.centralcomms.nz/";
$companyname = "Central Communications Ltd";

// Base64 the images or don't

if (isset($_GET["embedimages"])) {
    $phoneIcon = dirname(__FILE__)."/phone-icon-2x.png";
    $emailIcon = dirname(__FILE__)."/email-icon-2x.png";
    $linkIcon = dirname(__FILE__)."/link-icon-2x.png";
    $logoImg = dirname(__FILE__)."/centralcomms.email.png";

    $phoneIcontype = pathinfo($phoneIcon, PATHINFO_EXTENSION);
    $emailIcontype = pathinfo($emailIcon, PATHINFO_EXTENSION);
    $linkIcontype = pathinfo($linkIcon, PATHINFO_EXTENSION);
    $logoImgtype = pathinfo($logoImg, PATHINFO_EXTENSION);

    $phoneIcondata = file_get_contents($phoneIcon);
    $emailIcondata = file_get_contents($emailIcon);
    $linkIcondata = file_get_contents($linkIcon);
    $logoImgdata = file_get_contents($logoImg);

    $phoneBase64 = 'data:image/' . $type . ';base64,' . base64_encode($phoneIcondata);
    $emailBase64 = 'data:image/' . $type . ';base64,' . base64_encode($emailIcondata);
    $linkBase64 = 'data:image/' . $type . ';base64,' . base64_encode($linkIcondata);
    $logoBase64 = 'data:image/' . $type . ';base64,' . base64_encode($logoImgdata);
} else {
    $phoneBase64 = "https://www.centralcomms.nz/assets/email-sig/phone-icon-2x.png";
    $emailBase64 = "https://www.centralcomms.nz/assets/email-sig/email-icon-2x.png";
    $linkBase64 = "https://www.centralcomms.nz/assets/email-sig/link-icon-2x.png";
    $logoBase64 = "https://www.centralcomms.nz/assets/email-sig/centralcomms.email.png";
}

?>

<table id=ignature" cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width:100%;">
	<tbody>
		<tr>
			<td>
				<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width:100%;">
					<tbody>
						<tr>
							<td style="padding: 0px; vertical-align: middle;">
                            <h3 color="#000000" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span><?php print $name; ?></span></h3>
                            <?php if($title!=NULL) { ?><h4 color="#000000" style="margin: 0px; font-size: 16px; color: rgb(0, 0, 0);"><span><?php print $title; ?></span></h4><?php } ?>
                            <p color="#000000" font-size="medium" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span><?php print $companyname; ?></span></p>
								<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 20%;">
									<tbody>
										<tr>
											<td direction="horizontal" height="1" style="width: 100%; border-bottom: 1px solid #27458E; border-left: none; display: block;"></td>
										</tr>
									</tbody>
								</table>
								<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width:100%;">
									<tbody>
										<tr height="25" style="vertical-align: middle;">
											<td width="30" style="vertical-align: middle;">
												<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width:100%;">
													<tbody>
														<tr>
															<td style="vertical-align: bottom;">
                                                                <span width="11" style="display: block;"><img src="<?php print $phoneBase64; ?>" width="13" style="display: block;"></span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style="padding: 0px; color: rgb(0, 0, 0);">
                                            <a href="tel:0<?php print $workphone; ?>" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>0<?php print $workphone; ?></span></a> | <a href="tel:0<?php print $cell; ?>" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>0<?php print $cell; ?></span></a>
											</td>
										</tr>
										<tr height="25" style="vertical-align: middle;">
											<td width="30" style="vertical-align: middle;">
												<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width:100%;">
													<tbody>
														<tr>
															<td style="vertical-align: bottom;">
                                                                <span width="11" style="display: block;"><img src="<?php print $emailBase64; ?>" width="13" style="display: block;"></span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style="padding: 0px;">
                                                <a href="mailto:<?php print $email; ?>" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span><?php print $email; ?></span></a>
											</td>
										</tr>
										<tr height="25" style="vertical-align: middle;">
											<td width="30" style="vertical-align: middle;">
												<table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width:100%;">
													<tbody>
														<tr>
															<td style="vertical-align: bottom;">
                                                                <span width="11" style="display: block;"><img src="<?php print $linkBase64; ?>" width="13" style="display: block;"></span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style="padding: 0px;">
                                                <a href="<?php print $url; ?>" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span><?php print $url; ?></span></a>
											</td>
										</tr>
										<tr height="25" style="vertical-align: middle;">
											<td style="padding: 0px;" colspan="2">
                                                &nbsp;
											</td>
										</tr>
										<tr height="25" style="vertical-align: middle;">
											<td style="padding: 0px;" colspan="2">
                                                <a href="<?php print $url ?>" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><img src="<?php print $logoBase64; ?>" width="300" style="display: block;"></a>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
