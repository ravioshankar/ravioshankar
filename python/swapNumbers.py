#swap number without using temporary variable

from ast import List


class Solution:
    def swapPairs(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        for i in range(n):
            j = i + 1
            while j < n:
                if nums[i] > nums[j]:
                    nums[i], nums[j] = nums[j], nums[i]
                j += 1




                    