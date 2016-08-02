maxDepthLen = 0

def _maxDepth(root, i):
    if root:
        i += 1
        global maxDepthLen
        maxDepthLen = max(maxDepthLen, i)
        _maxDepth(root.left, i)
        _maxDepth(root.right, i)

class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    def maxDepth(self, root):
        i = 1
        _maxDepth(root, i)
        return maxDepthLen
