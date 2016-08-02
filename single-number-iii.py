class Solution(object):
    def singleNumber(self, nums):
        result = []
        nums = sorted(nums)
        i = 0
        while i < len(nums) - 1:
            if nums[i] != nums[i + 1]:
                result.append(nums[i])
                i += 1
            else:
                i += 2

        if i <= len(nums):
            result.append(nums[i - 1])
        return result

a = Solution()
print a.singleNumber([1, 2, 1, 3, 2, 5])
print a.singleNumber([1,2,1,3,2,5])
print a.singleNumber([-1895772685, -1756388866, -1756388866, -967931676, -490450406, -490450406, -74743538, -74743538, 1403617094, 1403617094, 1878401007, 1878401007] )
