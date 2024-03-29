/**
 *
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.



Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

return matrix.flat(1).includes(target);

// function exploreMatrix(matrix, target, r, c) {

  //   if (r >= matrix.length || c >= matrix[0].length) {
  //     return false;
  //   }

  //   if (matrix[r][c] === target) {

  //     console.log(`${r}- ${c} - `, matrix[r][c]);
  //     return true;
  //   }

  //   return exploreMatrix(matrix, target, r, c + 1) || exploreMatrix(matrix, target, r + 1, c);
  // }

  // return exploreMatrix(matrix, target, 0, 0);


};

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3; // true
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13; // false
// let matrix =
//   [
//     [-8, -7, -5, -5, -3, -1, -1, 1, 3, 4, 6, 6, 7, 7, 9, 11, 12, 13, 14, 16, 18],
//     [19, 21, 22, 24, 26, 28, 28, 29, 29, 29, 30, 32, 34, 36, 36, 37, 38, 40, 41, 43, 45],
//     [48, 49, 50, 52, 52, 54, 55, 55, 57, 57, 58, 60, 62, 62, 64, 65, 67, 69, 69, 71, 72],
//     [75, 77, 77, 79, 80, 81, 83, 85, 87, 87, 89, 89, 90, 92, 94, 95, 95, 97, 98, 100, 100],
//     [102, 103, 105, 105, 105, 106, 108, 108, 109, 109, 109, 109, 111, 112, 113, 113, 114, 114, 116, 117, 117],
//     [119, 119, 119, 119, 121, 121, 121, 122, 124, 125, 127, 128, 128, 128, 130, 131, 132, 132, 134, 136, 137],
//     [138, 139, 141, 142, 144, 146, 146, 148, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, 159, 160],
//     [161, 162, 164, 164, 165, 165, 165, 166, 166, 167, 169, 170, 172, 172, 173, 174, 174, 175, 177, 178, 178],
//     [180, 182, 184, 186, 188, 189, 191, 192, 194, 195, 197, 198, 199, 201, 201, 202, 204, 205, 206, 207, 207],
//     [209, 210, 211, 213, 215, 217, 218, 220, 222, 224, 224, 226, 228, 229, 230, 230, 230, 232, 233, 235, 237],
//     [238, 238, 239, 239, 241, 242, 243, 245, 246, 248, 248, 250, 251, 251, 253, 253, 255, 257, 257, 259, 259],
//     [260, 261, 262, 263, 265, 267, 269, 269, 271, 272, 273, 273, 273, 274, 276, 278, 278, 280, 280, 280, 282],
//     [283, 284, 284, 284, 286, 286, 288, 288, 290, 292, 292, 293, 295, 297, 297, 298, 299, 301, 302, 303, 303],
//     [305, 307, 307, 308, 309, 310, 311, 311, 312, 312, 312, 312, 313, 313, 315, 316, 316, 316, 317, 317, 318],
//     [321, 323, 324, 325, 325, 325, 326, 328, 330, 332, 332, 334, 336, 338, 339, 339, 340, 342, 344, 345, 347],
//     [350, 351, 351, 351, 351, 352, 353, 355, 356, 356, 358, 359, 361, 362, 363, 363, 365, 367, 368, 368, 370],
//     [371, 371, 373, 374, 376, 376, 377, 378, 378, 379, 381, 383, 384, 386, 388, 390, 391, 393, 394, 396, 398],
//     [399, 400, 401, 403, 403, 405, 406, 407, 409, 410, 411, 413, 414, 415, 416, 418, 420, 421, 421, 422, 422],
//     [425, 425, 425, 426, 427, 428, 429, 429, 430, 431, 431, 431, 431, 433, 434, 436, 437, 439, 440, 440, 441],
//     [444, 445, 445, 446, 446, 448, 450, 451, 452, 452, 452, 454, 454, 454, 455, 455, 457, 458, 459, 460, 461],
//     [464, 465, 466, 467, 468, 470, 470, 470, 472, 474, 474, 475, 475, 475, 477, 478, 480, 481, 483, 483, 485],
//     [488, 489, 489, 489, 490, 492, 494, 494, 495, 496, 496, 496, 496, 497, 499, 501, 503, 503, 503, 503, 505],
//     [507, 507, 509, 510, 511, 512, 512, 514, 516, 516, 518, 520, 521, 522, 522, 523, 523, 524, 524, 526, 528],
//     [530, 532, 533, 533, 535, 535, 537, 539, 540, 541, 542, 542, 542, 543, 545, 547, 548, 550, 550, 552, 554],
//     [557, 558, 558, 558, 558, 559, 560, 560, 561, 561, 563, 564, 565, 565, 566, 566, 568, 569, 571, 572, 573],
//     [576, 578, 580, 580, 582, 582, 584, 584, 585, 587, 589, 591, 593, 595, 595, 597, 599, 600, 600, 602, 603],
//     [606, 608, 608, 609, 609, 611, 613, 615, 617, 617, 617, 618, 620, 620, 621, 622, 622, 623, 625, 625, 625],
//     [628, 628, 629, 629, 631, 631, 632, 633, 633, 634, 634, 634, 635, 637, 637, 638, 639, 639, 639, 639, 640],
//     [643, 643, 644, 644, 646, 648, 650, 651, 653, 653, 654, 655, 657, 658, 659, 659, 660, 662, 663, 665, 665],
//     [668, 668, 670, 670, 671, 673, 674, 674, 676, 678, 678, 680, 681, 681, 683, 683, 683, 684, 685, 687, 688],
//     [691, 692, 692, 692, 694, 696, 696, 697, 698, 699, 699, 701, 702, 703, 705, 705, 707, 709, 709, 710, 712],
//     [713, 713, 713, 713, 714, 716, 718, 720, 721, 722, 724, 724, 725, 727, 727, 729, 729, 731, 731, 733, 734],
//     [736, 736, 738, 738, 739, 741, 741, 742, 743, 743, 745, 745, 745, 745, 746, 746, 746, 747, 748, 749, 749],
//     [750, 750, 752, 753, 755, 756, 757, 758, 758, 760, 762, 763, 765, 765, 767, 769, 770, 771, 773, 774, 775]];
// let target = 281;
console.log(searchMatrix(matrix, target));
