class Solution(object):
    def singleNumber(self, nums):
        nums = sorted(nums)
        i = 0
        while i < len(nums) - 1:
            if nums[i] != nums[i + 1]:
                return nums[i]
            i += 2
        return nums[-1]

a = Solution()
print a.singleNumber([2, 2, 3, 4, 4])
