class Solution(object):
    def addDigits(self, num):
        if num == 0: return 0
        if num % 9 == 0:
            return 9
        return num % 9

a = Solution()
print a.addDigits(199)
