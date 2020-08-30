// See complete code at: https://code.earthengine.google.com/e366c702daaa16ada4adaad932f0beaf

//***************************************************************************************
// Import images as from uploaded assets, mask, and clip to Caney Fork Farms.

// Upload all unmasked Planet images.
var planet_2017_04_08 = ee.Image('users/dfc58/20170408_153816_1024_3B_AnalyticMS_SR');
var planet_2017_05_09 = ee.Image('users/dfc58/20170509_154007_1042_3B_AnalyticMS_SR');
var planet_2017_05_10 = ee.Image('users/dfc58/20170510_153907_101b_3B_AnalyticMS_SR');
var planet_2017_05_14 = ee.Image('users/dfc58/20170514_154603_0e14_3B_AnalyticMS_SR');
var planet_2017_05_16 = ee.Image('users/dfc58/20170516_153927_102f_3B_AnalyticMS_SR');
var planet_2017_06_07 = ee.Image('users/dfc58/20170607_154046_0f43_3B_AnalyticMS_SR');
var planet_2017_06_09 = ee.Image('users/dfc58/20170609_154747_0e16_3B_AnalyticMS_SR');
var planet_2017_06_27 = ee.Image('users/dfc58/20170627_154822_0e0d_3B_AnalyticMS_SR');
var planet_2017_07_01 = ee.Image('users/dfc58/20170701_154136_0f1b_3B_AnalyticMS_SR');
var planet_2017_07_10 = ee.Image('users/dfc58/20170710_154209_0f12_3B_AnalyticMS_SR');
var planet_2017_07_11 = ee.Image('users/dfc58/20170711_155020_0e0d_3B_AnalyticMS_SR');
var planet_2017_07_17 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_SR');
var planet_2017_07_18 = ee.Image('users/dfc58/20170718_154120_1013_3B_AnalyticMS_SR');
var planet_2017_07_19 = ee.Image('users/dfc58/20170719_154153_0f31_3B_AnalyticMS_SR');
var planet_2017_07_20 = ee.Image('users/dfc58/20170720_154315_1008_3B_AnalyticMS_SR');
var planet_2017_07_21 = ee.Image('users/dfc58/20170721_154441_1007_3B_AnalyticMS_SR');
var planet_2017_07_22 = ee.Image('users/dfc58/20170722_154255_1011_3B_AnalyticMS_SR');
var planet_2017_07_26 = ee.Image('users/dfc58/20170726_154746_0e16_3B_AnalyticMS_SR');
var planet_2017_07_30 = ee.Image('users/dfc58/20170730_154311_102d_3B_AnalyticMS_SR');
var planet_2017_07_31 = ee.Image('users/dfc58/20170731_154259_1031_3B_AnalyticMS_SR');
var planet_2017_08_03 = ee.Image('users/dfc58/20170803_154240_1029_3B_AnalyticMS_SR');
var planet_2017_08_18 = ee.Image('users/dfc58/20170818_154540_100a_3B_AnalyticMS_SR');
var planet_2017_08_19 = ee.Image('users/dfc58/20170819_164450_0f40_3B_AnalyticMS_SR');
var planet_2017_08_20 = ee.Image('users/dfc58/20170820_154453_0f31_3B_AnalyticMS_SR');
var planet_2017_08_22 = ee.Image('users/dfc58/20170822_154453_102d_3B_AnalyticMS_SR');
var planet_2017_09_04 = ee.Image('users/dfc58/20170904_154653_100e_3B_AnalyticMS_SR');
var planet_2017_09_08 = ee.Image('users/dfc58/20170908_154455_1010_3B_AnalyticMS_SR');
var planet_2017_09_09 = ee.Image('users/dfc58/20170909_154532_1018_3B_AnalyticMS_SR');
var planet_2017_09_16 = ee.Image('users/dfc58/20170916_164157_0f4d_3B_AnalyticMS_SR');
var planet_2017_09_26 = ee.Image('users/dfc58/20170926_163943_1050_3B_AnalyticMS_SR');
var planet_2017_10_04 = ee.Image('users/dfc58/20171004_154626_103b_3B_AnalyticMS_SR');
var planet_2017_10_06 = ee.Image('users/dfc58/20171006_154523_102f_3B_AnalyticMS_SR');
var planet_2017_10_17 = ee.Image('users/dfc58/20171017_154649_0f52_3B_AnalyticMS_SR');
var planet_2017_10_19 = ee.Image('users/dfc58/20171019_154651_1003_3B_AnalyticMS_SR');
var planet_2017_10_31 = ee.Image('users/dfc58/20171031_163614_0f33_3B_AnalyticMS_SR');
var planet_2017_11_09 = ee.Image('users/dfc58/20171109_163451_0f33_3B_AnalyticMS_SR');
var planet_2017_11_21 = ee.Image('users/dfc58/20171121_163248_0f40_3B_AnalyticMS_SR');
var planet_2017_11_24 = ee.Image('users/dfc58/20171124_163135_0f40_3B_AnalyticMS_SR');
var planet_2017_11_26 = ee.Image('users/dfc58/20171126_163148_100d_3B_AnalyticMS_SR');
var planet_2017_12_01 = ee.Image('users/dfc58/20171201_163033_104b_3B_AnalyticMS_SR');
var planet_2017_12_03 = ee.Image('users/dfc58/20171203_154829_1005_3B_AnalyticMS_SR');
var planet_2017_12_07 = ee.Image('users/dfc58/20171207_162921_104a_3B_AnalyticMS_SR');
var planet_2017_12_10 = ee.Image('users/dfc58/20171210_154944_0f38_3B_AnalyticMS_SR');
var planet_2017_12_11 = ee.Image('users/dfc58/20171211_154906_0f18_3B_AnalyticMS_SR');
var planet_2018_05_20 = ee.Image('users/dfc58/20180520_160425_104e_3B_AnalyticMS_SR');
var planet_2018_05_23 = ee.Image('users/dfc58/20180523_155552_0f25_3B_AnalyticMS_SR');


// Upload all Planet udm masks.
var mask_2017_04_08 = ee.Image('users/dfc58/20170408_153816_1024_3B_AnalyticMS_DN_udm');
var mask_2017_05_09 = ee.Image('users/dfc58/20170509_154007_1042_3B_AnalyticMS_DN_udm');
var mask_2017_05_10 = ee.Image('users/dfc58/20170510_153907_101b_3B_AnalyticMS_DN_udm');
var mask_2017_05_14 = ee.Image('users/dfc58/20170514_154603_0e14_3B_AnalyticMS_DN_udm');
var mask_2017_05_16 = ee.Image('users/dfc58/20170516_153927_102f_3B_AnalyticMS_DN_udm');
var mask_2017_06_07 = ee.Image('users/dfc58/20170607_154046_0f43_3B_AnalyticMS_DN_udm');
var mask_2017_06_09 = ee.Image('users/dfc58/20170609_154747_0e16_3B_AnalyticMS_DN_udm');
var mask_2017_06_27 = ee.Image('users/dfc58/20170627_154822_0e0d_3B_AnalyticMS_DN_udm');
var mask_2017_07_01 = ee.Image('users/dfc58/20170701_154136_0f1b_3B_AnalyticMS_DN_udm');
var mask_2017_07_10 = ee.Image('users/dfc58/20170710_154209_0f12_3B_AnalyticMS_DN_udm');
var mask_2017_07_11 = ee.Image('users/dfc58/20170711_155020_0e0d_3B_AnalyticMS_DN_udm');
var mask_2017_07_17 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_DN_udm');
var mask_2017_07_18 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_DN_udm');
var mask_2017_07_19 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_DN_udm');
var mask_2017_07_20 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_DN_udm');
var mask_2017_07_21 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_DN_udm');
var mask_2017_07_22 = ee.Image('users/dfc58/20170717_154220_1015_3B_AnalyticMS_DN_udm');
var mask_2017_07_26 = ee.Image('users/dfc58/20170726_154746_0e16_3B_AnalyticMS_DN_udm');
var mask_2017_07_30 = ee.Image('users/dfc58/20170730_154311_102d_3B_AnalyticMS_DN_udm');
var mask_2017_07_31 = ee.Image('users/dfc58/20170731_154259_1031_3B_AnalyticMS_DN_udm');
var mask_2017_08_03 = ee.Image('users/dfc58/20170803_154240_1029_3B_AnalyticMS_DN_udm');
var mask_2017_08_18 = ee.Image('users/dfc58/20170818_154540_100a_3B_AnalyticMS_DN_udm');
var mask_2017_08_19 = ee.Image('users/dfc58/20170819_164450_0f40_3B_AnalyticMS_DN_udm');
var mask_2017_08_20 = ee.Image('users/dfc58/20170820_154453_0f31_3B_AnalyticMS_DN_udm');
var mask_2017_08_22 = ee.Image('users/dfc58/20170822_154453_102d_3B_AnalyticMS_DN_udm');
var mask_2017_09_04 = ee.Image('users/dfc58/20170904_154653_100e_3B_AnalyticMS_DN_udm');
var mask_2017_09_08 = ee.Image('users/dfc58/20170908_154455_1010_3B_AnalyticMS_DN_udm');
var mask_2017_09_09 = ee.Image('users/dfc58/20170909_154532_1018_3B_AnalyticMS_DN_udm');
var mask_2017_09_16 = ee.Image('users/dfc58/20170916_164157_0f4d_3B_AnalyticMS_DN_udm');
var mask_2017_09_26 = ee.Image('users/dfc58/20170926_163943_1050_3B_AnalyticMS_DN_udm');
var mask_2017_10_04 = ee.Image('users/dfc58/20171004_154626_103b_3B_AnalyticMS_DN_udm');
var mask_2017_10_06 = ee.Image('users/dfc58/20171006_154523_102f_3B_AnalyticMS_DN_udm');
var mask_2017_10_17 = ee.Image('users/dfc58/20171017_154649_0f52_3B_AnalyticMS_DN_udm');
var mask_2017_10_19 = ee.Image('users/dfc58/20171019_154651_1003_3B_AnalyticMS_DN_udm');
var mask_2017_10_31 = ee.Image('users/dfc58/20171031_163614_0f33_3B_AnalyticMS_DN_udm');
var mask_2017_11_09 = ee.Image('users/dfc58/20171109_163451_0f33_3B_AnalyticMS_DN_udm');
var mask_2017_11_21 = ee.Image('users/dfc58/20171121_163248_0f40_3B_AnalyticMS_DN_udm');
var mask_2017_11_24 = ee.Image('users/dfc58/20171124_163135_0f40_3B_AnalyticMS_DN_udm');
var mask_2017_11_26 = ee.Image('users/dfc58/20171126_163148_100d_3B_AnalyticMS_DN_udm');
var mask_2017_12_01 = ee.Image('users/dfc58/20171201_163033_104b_3B_AnalyticMS_DN_udm');
var mask_2017_12_03 = ee.Image('users/dfc58/20171203_154829_1005_3B_AnalyticMS_DN_udm');
var mask_2017_12_07 = ee.Image('users/dfc58/20171207_162921_104a_3B_AnalyticMS_DN_udm');
var mask_2017_12_10 = ee.Image('users/dfc58/20171210_154944_0f38_3B_AnalyticMS_DN_udm');
var mask_2017_12_11 = ee.Image('users/dfc58/20171211_154906_0f18_3B_AnalyticMS_DN_udm');
var mask_2018_05_20 = ee.Image('users/dfc58/20180520_160425_104e_3B_AnalyticMS_DN_udm');
var mask_2018_05_23 = ee.Image('users/dfc58/20180523_155552_0f25_3B_AnalyticMS_DN_udm');


// Reconfigure all Planet masks.
// Keep only pixels where there are no black areas, clouds, or suspect band values.
// pg. 53: https://www.planet.com/products/satellite-imagery/files/Planet_Combined_Imagery_Product_Specs_December2017.pdf
// Buffer mask by 2 pixels
// As per Planet specs: "a buffer of at least 1 pixel should be considered"
var mask = mask_2017_04_08.eq(0).focal_min(2, 'circle', 'pixels');
var mask1 = mask_2017_05_09.eq(0).focal_min(2, 'circle', 'pixels');
var mask2 = mask_2017_05_10.eq(0).focal_min(2, 'circle', 'pixels');
var mask3 = mask_2017_05_14.eq(0).focal_min(2, 'circle', 'pixels');
var mask4 = mask_2017_05_16.eq(0).focal_min(2, 'circle', 'pixels');
var mask5 = mask_2017_06_07.eq(0).focal_min(2, 'circle', 'pixels');
var mask6 = mask_2017_06_09.eq(0).focal_min(2, 'circle', 'pixels');
var mask7 = mask_2017_06_27.eq(0).focal_min(2, 'circle', 'pixels');
var mask8 = mask_2017_07_01.eq(0).focal_min(2, 'circle', 'pixels');
var mask9 = mask_2017_07_10.eq(0).focal_min(2, 'circle', 'pixels');
var mask10 = mask_2017_07_11.eq(0).focal_min(2, 'circle', 'pixels');
var mask11 = mask_2017_07_17.eq(0).focal_min(2, 'circle', 'pixels');
var mask12 = mask_2017_07_18.eq(0).focal_min(2, 'circle', 'pixels');
var mask13 = mask_2017_07_19.eq(0).focal_min(2, 'circle', 'pixels');
var mask14 = mask_2017_07_20.eq(0).focal_min(2, 'circle', 'pixels');
var mask15 = mask_2017_07_21.eq(0).focal_min(2, 'circle', 'pixels');
var mask16 = mask_2017_07_22.eq(0).focal_min(2, 'circle', 'pixels');
var mask17 = mask_2017_07_26.eq(0).focal_min(2, 'circle', 'pixels');
var mask18 = mask_2017_07_30.eq(0).focal_min(2, 'circle', 'pixels');
var mask19 = mask_2017_07_31.eq(0).focal_min(2, 'circle', 'pixels');
var mask20 = mask_2017_08_03.eq(0).focal_min(2, 'circle', 'pixels');
var mask21 = mask_2017_08_18.eq(0).focal_min(2, 'circle', 'pixels');
var mask22 = mask_2017_08_19.eq(0).focal_min(2, 'circle', 'pixels');
var mask23 = mask_2017_08_20.eq(0).focal_min(2, 'circle', 'pixels');
var mask24 = mask_2017_08_22.eq(0).focal_min(2, 'circle', 'pixels');
var mask25 = mask_2017_09_04.eq(0).focal_min(2, 'circle', 'pixels');
var mask26 = mask_2017_09_08.eq(0).focal_min(2, 'circle', 'pixels');
var mask27 = mask_2017_09_09.eq(0).focal_min(2, 'circle', 'pixels');
var mask28 = mask_2017_09_16.eq(0).focal_min(2, 'circle', 'pixels');
var mask29 = mask_2017_09_26.eq(0).focal_min(2, 'circle', 'pixels');
var mask30 = mask_2017_10_04.eq(0).focal_min(2, 'circle', 'pixels');
var mask31 = mask_2017_10_06.eq(0).focal_min(2, 'circle', 'pixels');
var mask32 = mask_2017_10_17.eq(0).focal_min(2, 'circle', 'pixels');
var mask33 = mask_2017_10_19.eq(0).focal_min(2, 'circle', 'pixels');
var mask34 = mask_2017_10_31.eq(0).focal_min(2, 'circle', 'pixels');
var mask35 = mask_2017_11_09.eq(0).focal_min(2, 'circle', 'pixels');
var mask36 = mask_2017_11_21.eq(0).focal_min(2, 'circle', 'pixels');
var mask37 = mask_2017_11_24.eq(0).focal_min(2, 'circle', 'pixels');
var mask38 = mask_2017_11_26.eq(0).focal_min(2, 'circle', 'pixels');
var mask39 = mask_2017_12_01.eq(0).focal_min(2, 'circle', 'pixels');
var mask40 = mask_2017_12_03.eq(0).focal_min(2, 'circle', 'pixels');
var mask41 = mask_2017_12_07.eq(0).focal_min(2, 'circle', 'pixels');
var mask42 = mask_2017_12_10.eq(0).focal_min(2, 'circle', 'pixels');
var mask43 = mask_2017_12_11.eq(0).focal_min(2, 'circle', 'pixels');
var mask44 = mask_2018_05_20.eq(0).focal_min(2, 'circle', 'pixels');
var mask45 = mask_2018_05_23.eq(0).focal_min(2, 'circle', 'pixels');

// Mask all Planet images using udm mask.
// Mask 7/20, 7/21, 7/22 images with an additional mask for pixels with value 0 for any band.
// (These three image dates were only ones with value 0 that slipped past udm mask... necessary prior to histogram minimum below).
var masked_2017_04_08 = planet_2017_04_08.mask(mask);
var masked_2017_05_09 = planet_2017_05_09.mask(mask1);
var masked_2017_05_10 = planet_2017_05_10.mask(mask2);
var masked_2017_05_14 = planet_2017_05_14.mask(mask3);
var masked_2017_05_16 = planet_2017_05_16.mask(mask4);
var masked_2017_06_07 = planet_2017_06_07.mask(mask5);
var masked_2017_06_09 = planet_2017_06_09.mask(mask6);
var masked_2017_06_27 = planet_2017_06_27.mask(mask7);
var masked_2017_07_01 = planet_2017_07_01.mask(mask8);
var masked_2017_07_10 = planet_2017_07_10.mask(mask9);
var masked_2017_07_11 = planet_2017_07_11.mask(mask10);
var masked_2017_07_17 = planet_2017_07_17.mask(mask11);
var masked_2017_07_18 = planet_2017_07_18.mask(mask12);
var masked_2017_07_19 = planet_2017_07_19.mask(mask13);
var masked_2017_07_20 = planet_2017_07_20.mask(mask14);
var masked_2017_07_21 = planet_2017_07_21.mask(mask15);
var masked_2017_07_22 = planet_2017_07_22.mask(mask16);
var masked_2017_07_26 = planet_2017_07_26.mask(mask17);
var masked_2017_07_30 = planet_2017_07_30.mask(mask18);
var masked_2017_07_31 = planet_2017_07_31.mask(mask19);
var masked_2017_08_03 = planet_2017_08_03.mask(mask20);
var masked_2017_08_18 = planet_2017_08_18.mask(mask21);
var masked_2017_08_19 = planet_2017_08_19.mask(mask22);
var masked_2017_08_20 = planet_2017_08_20.mask(mask23);
var masked_2017_08_22 = planet_2017_08_22.mask(mask24);
var masked_2017_09_04 = planet_2017_09_04.mask(mask25);
var masked_2017_09_08 = planet_2017_09_08.mask(mask26);
var masked_2017_09_09 = planet_2017_09_09.mask(mask27);
var masked_2017_09_16 = planet_2017_09_16.mask(mask28);
var masked_2017_09_26 = planet_2017_09_26.mask(mask29);
var masked_2017_10_04 = planet_2017_10_04.mask(mask30);
var masked_2017_10_06 = planet_2017_10_06.mask(mask31);
var masked_2017_10_17 = planet_2017_10_17.mask(mask32);
var masked_2017_10_19 = planet_2017_10_19.mask(mask33);
var masked_2017_10_31 = planet_2017_10_31.mask(mask34);
var masked_2017_11_09 = planet_2017_11_09.mask(mask35);
var masked_2017_11_21 = planet_2017_11_21.mask(mask36);
var masked_2017_11_24 = planet_2017_11_24.mask(mask37);
var masked_2017_11_26 = planet_2017_11_26.mask(mask38);
var masked_2017_12_01 = planet_2017_12_01.mask(mask39);
var masked_2017_12_03 = planet_2017_12_03.mask(mask40);
var masked_2017_12_07 = planet_2017_12_07.mask(mask41);
var masked_2017_12_10 = planet_2017_12_10.mask(mask42);
var masked_2017_12_11 = planet_2017_12_11.mask(mask43);
var masked_2018_05_20 = planet_2018_05_20.mask(mask44);
var masked_2018_05_23 = planet_2018_05_23.mask(mask45);

var maskA = masked_2017_07_20.gt(0);
var masked_2017_07_20A = masked_2017_07_20.mask(maskA);

var maskB = masked_2017_07_21.gt(0);
var masked_2017_07_21A = masked_2017_07_21.mask(maskB);

var maskC = masked_2017_07_22.gt(0);
var masked_2017_07_22A = masked_2017_07_22.mask(maskC);


// Create image collection from masked images.

var maskedCollection = ee.ImageCollection([masked_2017_04_08, masked_2017_05_09,
                                           masked_2017_05_10, masked_2017_05_14, masked_2017_05_16, masked_2017_06_07, masked_2017_06_09,
                                           masked_2017_06_27, masked_2017_07_01, masked_2017_07_10, masked_2017_07_11, masked_2017_07_17,
                                           masked_2017_07_18, masked_2017_07_19, masked_2017_07_20A, masked_2017_07_21A, masked_2017_07_22A,
                                           masked_2017_07_26, masked_2017_07_30, masked_2017_07_31, masked_2017_08_03, masked_2017_08_18,
                                           masked_2017_08_19, masked_2017_08_20, masked_2017_08_22, masked_2017_09_04, masked_2017_09_08,
                                           masked_2017_09_09, masked_2017_09_16, masked_2017_09_26, masked_2017_10_04, masked_2017_10_06,
                                           masked_2017_10_17, masked_2017_10_19, masked_2017_10_31, masked_2017_11_09, masked_2017_11_21,
                                           masked_2017_11_24, masked_2017_11_26, masked_2017_12_01, masked_2017_12_03, masked_2017_12_07,
                                           masked_2017_12_10, masked_2017_12_11, masked_2018_05_20, masked_2018_05_23]);


// Develop function to clip.
var cffClip = function(image) {
    return image.clip(CFF)} ;


// Clip images to CFF and store in new Image Collection variable "cffClipped".
var cffClipped = maskedCollection.map(cffClip);
print(cffClipped, 'cffClipped');

//***************************************************************************************


//***************************************************************************************
// Evaluate histograms of "cffClipped" to see if there
// are any outlier values on the low end of the distribution
// that would interfere with the histogram minimum operation.
// (It would be smart to save each image as a .png for future reference.)

var options = {
title: 'Histogram',
fontSize: 20,
binSize: 1,
minValue: 0,
hAxis: {title: 'Reflectance'},
vAxis: {title: 'count of values'}
};

// Make the histogram, set the options.
// (Change .get(#) to appropriate value to see different image date histograms)
var list = cffClipped.toList(cffClipped.size());
var histogram = ui.Chart.image.histogram(list.get(16), CFF, 100)
.setOptions(options);

// Display histogram
print(histogram);


// Histograms signal that data is regular- no further masking needed, to correct for errors.
// Move on to histogram minimum correction.

//***************************************************************************************


//***************************************************************************************
// Apply histogram minimum function to all images.

// Develop histogram minimum function.
var histogramMin = function(image) {
    var imageMin = image.reduceRegion({
                                      reducer: ee.Reducer.min(),
                                      geometry:CFF
                                      });
    var toSubtract = ee.Image([ee.Number(imageMin.get('b1')), ee.Number(imageMin.get('b2')),
                               ee.Number(imageMin.get('b3')), ee.Number(imageMin.get('b4')),]);
    
    return image.subtract(toSubtract);
    
};

// Map histogram minimum function across 'maskedCollection' image collection.

var maskedHMCollection = cffClipped.map(histogramMin);

//***************************************************************************************


//***************************************************************************************
// Add NDVI band to images.

// This function gets NDVI from SkyScope imagery.
var addNDVI = function(image) {
    return image.addBands(image.normalizedDifference(['b4', 'b3']));
};

// Map the function over the planet collection.
var collectionWithNDVI = maskedHMCollection.map(addNDVI);

//***************************************************************************************


//***************************************************************************************
// Create individual images from "cffClipped" list and display images.


// (* In the future use 'flatten' operation here)
var listOfClippedImages = collectionWithNDVI.toList(collectionWithNDVI.size());
var image1 = ee.Image(listOfClippedImages.get(0));
var image2 = ee.Image(listOfClippedImages.get(1));
var image3 = ee.Image(listOfClippedImages.get(2));
var image4 = ee.Image(listOfClippedImages.get(3));
var image5 = ee.Image(listOfClippedImages.get(4));
var image6 = ee.Image(listOfClippedImages.get(5));
var image7 = ee.Image(listOfClippedImages.get(6));
var image8 = ee.Image(listOfClippedImages.get(7));
var image9 = ee.Image(listOfClippedImages.get(8));
var image10 = ee.Image(listOfClippedImages.get(9));
var image11 = ee.Image(listOfClippedImages.get(10));
var image12 = ee.Image(listOfClippedImages.get(11));
var image13 = ee.Image(listOfClippedImages.get(12));
var image14 = ee.Image(listOfClippedImages.get(13));
var image15 = ee.Image(listOfClippedImages.get(14));
var image16 = ee.Image(listOfClippedImages.get(15));
var image17 = ee.Image(listOfClippedImages.get(16));
var image18 = ee.Image(listOfClippedImages.get(17));
var image19 = ee.Image(listOfClippedImages.get(18));
var image20 = ee.Image(listOfClippedImages.get(19));
var image21 = ee.Image(listOfClippedImages.get(20));
var image22 = ee.Image(listOfClippedImages.get(21));
var image23 = ee.Image(listOfClippedImages.get(22));
var image24 = ee.Image(listOfClippedImages.get(23));
var image25 = ee.Image(listOfClippedImages.get(24));
var image26 = ee.Image(listOfClippedImages.get(25));
var image27 = ee.Image(listOfClippedImages.get(26));
var image28 = ee.Image(listOfClippedImages.get(27));
var image29 = ee.Image(listOfClippedImages.get(28));
var image30 = ee.Image(listOfClippedImages.get(29));
var image31 = ee.Image(listOfClippedImages.get(30));
var image32 = ee.Image(listOfClippedImages.get(31));
var image33 = ee.Image(listOfClippedImages.get(32));
var image34 = ee.Image(listOfClippedImages.get(33));
var image35 = ee.Image(listOfClippedImages.get(34));
var image36 = ee.Image(listOfClippedImages.get(35));
var image37 = ee.Image(listOfClippedImages.get(36));
var image38 = ee.Image(listOfClippedImages.get(37));
var image39 = ee.Image(listOfClippedImages.get(38));
var image40 = ee.Image(listOfClippedImages.get(39));
var image41 = ee.Image(listOfClippedImages.get(40));
var image42 = ee.Image(listOfClippedImages.get(41));
var image43 = ee.Image(listOfClippedImages.get(42));
var image44 = ee.Image(listOfClippedImages.get(43));
var image45 = ee.Image(listOfClippedImages.get(44));
var image46 = ee.Image(listOfClippedImages.get(45));

var naturalColor = {bands: ['b3', 'b2', 'b1'], gamma: 1, max: 1041, min: 47};


// Display CFF NDVI images.
Map.centerObject(image1,15);
Map.addLayer(image1, imageVisParam, '(1) 04_08_2017', 0);
Map.addLayer(image2, imageVisParam, '(2) 05_09_2017', 0);
Map.addLayer(image3, imageVisParam, '(3) 05_10_2017', 0);
Map.addLayer(image4, imageVisParam, '(4) 05_14_2017', 0);
Map.addLayer(image5, imageVisParam, '(5) 05_16_2017', 0);
Map.addLayer(image6, imageVisParam, '(6) 06_07_2017', 0);
Map.addLayer(image7, imageVisParam, '(7) 06_09_2017', 0);
Map.addLayer(image8, imageVisParam, '(8) 06_27_2017', 0);
Map.addLayer(image9, imageVisParam, '(9) 07_01_2017', 0);
Map.addLayer(image10, imageVisParam, '(10) 07_10_2017', 0);
Map.addLayer(image11, imageVisParam, '(11) 07_11_2017', 0);
Map.addLayer(image12, imageVisParam, '(12) 07_17_2017', 0);
Map.addLayer(image13, imageVisParam, '(13) 07_18_2017', 0);
Map.addLayer(image14, imageVisParam, '(14) 07_19_2017', 0);
Map.addLayer(image15, imageVisParam, '(15) 07_20_2017', 0);
Map.addLayer(image16, imageVisParam, '(16) 07_21_2017', 0);
Map.addLayer(image17, imageVisParam, '(17) 07_22_2017', 0);
Map.addLayer(image18, imageVisParam, '(18) 07_26_2017', 0);
Map.addLayer(image19, imageVisParam, '(19) 07_30_2017', 0);
Map.addLayer(image20, imageVisParam, '(20) 07_31_2017', 0);
Map.addLayer(image21, imageVisParam, '(21) 08_03_2017', 0);
Map.addLayer(image22, imageVisParam, '(22) 08_18_2017', 0);
Map.addLayer(image23, imageVisParam, '(23) 08_19_2017', 0);
Map.addLayer(image24, imageVisParam, '(24) 08_20_2017', 0);
Map.addLayer(image25, imageVisParam, '(25) 08_22_2017', 0);
Map.addLayer(image26, imageVisParam, '(26) 09_04_2017', 0);
Map.addLayer(image27, imageVisParam, '(27) 09_08_2017', 0);
Map.addLayer(image28, imageVisParam, '(28) 09_09_2017', 0);
Map.addLayer(image29, imageVisParam, '(29) 09_16_2017', 0);
Map.addLayer(image30, imageVisParam, '(30) 09_26_2017', 0);
Map.addLayer(image31, imageVisParam, '(31) 10_04_2017', 0);
Map.addLayer(image32, imageVisParam, '(32) 10_06_2017', 0);
Map.addLayer(image33, imageVisParam, '(33) 10_17_2017', 0);
Map.addLayer(image34, imageVisParam, '(34) 10_19_2017', 0);
Map.addLayer(image35, imageVisParam, '(35) 10_31_2017', 0);
Map.addLayer(image36, imageVisParam, '(36) 11_09_2017', 0);
Map.addLayer(image37, imageVisParam, '(37) 11_21_2017', 0);
Map.addLayer(image38, imageVisParam, '(38) 11_24_2017', 0);
Map.addLayer(image39, imageVisParam, '(39) 11_26_2017', 0);
Map.addLayer(image40, imageVisParam, '(40) 12_01_2017', 0);
Map.addLayer(image41, imageVisParam, '(41) 12_03_2017', 0);
Map.addLayer(image42, imageVisParam, '(42) 12_07_2017', 0);
Map.addLayer(image43, imageVisParam, '(43) 12_10_2017', 0);
Map.addLayer(image44, imageVisParam, '(44) 12_11_2017', 0);
Map.addLayer(image45, imageVisParam, '(45) 05_20_2018', 0);
Map.addLayer(image46, imageVisParam, '(46) 05_23_2018', 0);

// Now, with images displayed, manually scrutinize each to best reconstruct sub-paddock location
// and flerd location on a given day.
// (Use flow accumulation function below as extra help to distinguish between sub-paddock edges
// and edges within a sub-paddock that appear due to differences in hydrological flows)

var ccfFlowAccumulation = ee.Image(Flow);
print('ccfFlowAccumulation');
Map.addLayer(ccfFlowAccumulation, imageVisParam4, 'CFF_Flow_Accumulation', 0);

//***************************************************************************************



//***************************************************************************************


var pastureMap = ee.Feature(table);
Map.addLayer(table, {}, 'Pasture_Map', 0);


//***************************************************************************************


// Determine area (acres) for each paddock polygon for use in AU/acre data points
print('Polygon0 area: ', summersouth1xx050917071017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon1 area: ', summersouth2xx051017071017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon2 area: ', summersouth3xx051617071017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon3 area: ', summersouth4xx05162017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon4 area: ', summersouth5xx06072017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon5 area: ', summersouth6xx06072017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon6 area: ', summersouth7xx06072017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon7 area: ', summersouth8xx06072017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon8 area: ', summersouth4xx071117.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon9 area: ', summersouth6xx071917.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon10 area: ', summersouth7xx072117.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon11 area: ', summersouth8xx072217.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon12 area: ', summersouth10xx072217.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon13 area: ', summerriverside1xx060917072617.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon14 area: ', summerriverside2xx072617.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon15 area: ', summerriverside3xx073017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon16 area: ', summerriverside4xx073117.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon17 area: ', summerriverside5xx080317.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon18 area: ', summerriverside6xx080317.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon19 area: ', summerriverside7xx080317.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon20 area: ', GibbsSouthxx05162017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon21 area: ', Jupiter1xx07072017.area().divide(1000 * 1000).multiply(247.105381));
print('Polygon22 area: ', Jupiter2xx060917.area().divide(1000 * 1000).multiply(247.105381));

//***************************************************************************************


//***************************************************************************************
// Export table of mean NDVI value per sub-paddock per day.

// Make a list of Features.
var features = [summersouth1xx050917071017, summersouth2xx051017071017, summersouth3xx051617071017,
                summersouth4xx05162017, summersouth5xx06072017, summersouth6xx06072017, summersouth7xx06072017,
                summersouth8xx06072017, summersouth4xx071117, summersouth6xx071917, summersouth7xx072117, summersouth8xx072217,
                summersouth10xx072217, summerriverside1xx060917072617,summerriverside2xx072617,summerriverside3xx073017,
                summerriverside4xx073117, summerriverside5xx080317,summerriverside6xx080317,summerriverside7xx080317,
                GibbsSouthxx05162017,Jupiter1xx07072017,Jupiter2xx060917];

// Create a FeatureCollection from the list and print it.
var allKnownPastures = ee.FeatureCollection(features);
print(allKnownPastures, 'allKnownPastures');


// Get mean NDVI for each known paddock of 2017 imagery.
// Create a feature collection without geometry and set the properties to the dictionary of means.
// Export the FeatureCollection.
//05_09
var ndvi050917mean = image2.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi050917mean, '05_09');
//05_10
var ndvi051017mean = image3.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi051017mean, '05_10');
//05_14
var ndvi051417mean = image4.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi051417mean, '05_14');
//05_16
var ndvi051617mean = image5.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi051617mean, '05_16');
//06_07
var ndvi060717mean = image6.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi060717mean, '06_07');
//06_09
var ndvi060917mean = image7.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi060917mean, '06_09');
//06_27
var ndvi062717mean = image8.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi062717mean, '06_27');
//07_01
var ndvi070117mean = image9.reduceRegions({
                                          reducer: ee.Reducer.mean(),
                                          collection: allKnownPastures});
print(ndvi070117mean, '07_01');
//07_10
var ndvi071017mean = image10.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi071017mean, '07_10');
//07_11
var ndvi071117mean = image11.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi071117mean, '07_11');
//07_17
var ndvi071717mean = image12.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi071717mean, '07_17');
//07_18
var ndvi071817mean = image13.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi071817mean, '07_18');
//07_19
var ndvi071917mean = image14.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi071917mean, '07_19');
//07_20
var ndvi072017mean = image15.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi072017mean, '07_20');
//07_21
var ndvi072117mean = image16.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi072117mean, '07_21');
//07_22
var ndvi072217mean = image17.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi072217mean, '07_22');
//07_26
var ndvi072617mean = image18.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi072617mean, '07_26');
//07_30
var ndvi073017mean = image19.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi073017mean, '07_30');
//07_31
var ndvi073117mean = image20.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi073117mean, '07_31');
//08_03
var ndvi080317mean = image21.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi080317mean, '08_03');
//08_18
var ndvi081817mean = image22.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi081817mean, '08_18');
//08_19
var ndvi081917mean = image23.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi081917mean, '08_19');
//08_20
var ndvi082017mean = image24.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi082017mean, '08_20');
//08_22
var ndvi082217mean = image25.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi082217mean, '08_22');
//09_04
var ndvi090417mean = image26.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi090417mean, '09_04');
//09_08
var ndvi090817mean = image27.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi090817mean, '09_08');
//09_09
var ndvi090917mean = image28.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi090917mean, '09_09');
//09_16
var ndvi091617mean = image29.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi091617mean, '09_16');
//09_26
var ndvi092617mean = image30.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi092617mean, '09_26');
//10_04
var ndvi100417mean = image31.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi100417mean, '10_04');
//10_06
var ndvi100617mean = image32.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi100617mean, '10_06');
//10_17
var ndvi101717mean = image33.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi101717mean, '10_17');
//10_19
var ndvi101917mean = image34.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi101917mean, '10_19');
//10_31
var ndvi103117mean = image35.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi103117mean, '10_31');
//11_19
var ndvi111917mean = image36.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi111917mean, '11_19');
//11_21
var ndvi112117mean = image37.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi112117mean, '11_21');
//11_24
var ndvi112417mean = image38.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi112417mean, '11_24');
//11_26
var ndvi112617mean = image39.reduceRegions({
                                           reducer: ee.Reducer.mean(),
                                           collection: allKnownPastures});
print(ndvi112617mean, '11_26');

var allDates = ee.FeatureCollection(ee.List([ndvi050917mean, ndvi051017mean, ndvi051417mean,
                                             ndvi051617mean, ndvi060717mean, ndvi060917mean, ndvi062717mean, ndvi070117mean, ndvi071017mean,
                                             ndvi071117mean, ndvi071117mean, ndvi071817mean, ndvi071917mean, ndvi072017mean, ndvi072117mean,
                                             ndvi072217mean, ndvi072617mean, ndvi073017mean, ndvi073117mean, ndvi080317mean, ndvi081817mean,
                                             ndvi081917mean, ndvi082017mean, ndvi082217mean, ndvi090417mean, ndvi090817mean, ndvi090917mean,
                                             ndvi091617mean, ndvi092617mean, ndvi100417mean, ndvi100617mean, ndvi101717mean, ndvi101917mean,
                                             ndvi103117mean, ndvi111917mean, ndvi112117mean, ndvi112417mean, ndvi112617mean]));
print (allDates, 'allDates');

var allDatesFlat = allDates.flatten();
print (allDatesFlat);

Export.table.toDrive({
                     collection: allDatesFlat,
                     description: 'allDates',
                     fileFormat: 'CSV',
                     });


//***************************************************************************************

// Analyze data using R.
