class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

    def __repr__(self):
        return str(self.val)

class Solution(object):
    def invertTree(self, root):
        if root:
            if not (root.right and root.left):
                return root
            self._invertTree(root)
        return root

    def _invertTree(self, root):
        aux = root.left
        root.left = root.right
        root.right = aux
        self.invertTree(root.left)
        self.invertTree(root.right)

def preOrder(node):
    if node:
        print node
        preOrder(node.left)
        preOrder(node.right)

solution = Solution()
root = TreeNode(4)
root.left = TreeNode(3)
preOrder(root)
solution.invertTree(root)
preOrder(root)
