class Solution(object):
    def countBits(self, num):
        result = [0, 1]
        sequence = [1, 2]
        while len(result) <= num:
            result += sequence
            sequence += [i + 1 for i in sequence]

        return result[:num + 1]

if __name__ == '__main__':
    a = Solution()
