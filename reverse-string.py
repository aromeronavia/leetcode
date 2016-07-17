class Solution(object):
    def reverseString(self, s):
        revertedString = []
        for i in range(len(s)):
            revertedString.append(s[len(s) - 1 - i])
        return ''.join(revertedString)


s = Solution()
print s.reverseString('jaja')
