# Uses python2
import sys

def traverse_by_each_method(tree):
    root = tree[0]

    tracker1 = []
    traverse_in_order_iterative(tree, root, tracker1)

    tracker2 = []
    traverse_pre_order_iterative(tree, root, tracker2)

    tracker3 = []
    traverse_post_order_iterative(tree, root, tracker3)

    print ' '.join(map(str, tracker1))
    print ' '.join(map(str, tracker2))
    print ' '.join(map(str, tracker3))


def get_node(tree, index):
    if index >= 0:
        return tree[index]
    return None


def traverse_in_order_iterative(tree, root, tracker):
    nodes_stack = []
    current = root
    done = False
    while not done:
        if current is not None:
            nodes_stack.append(current)
            current = get_node(tree, current[1])
        else:
            if len(nodes_stack):
                current = nodes_stack.pop()
                tracker.append(current[0])
                current = get_node(tree, current[2])
            else:
                done = True


def traverse_pre_order_iterative(tree, root, tracker):
    nodes_stack = []
    nodes_stack.append(root)
    while len(nodes_stack):
        node = nodes_stack.pop()
        tracker.append(node[0])

        if node[2] >= 0:
            nodes_stack.append(tree[node[2]])
        if node[1] >= 0:
            nodes_stack.append(tree[node[1]])


def traverse_post_order_iterative(tree, root, tracker):
    nodes_stack1 = []
    nodes_stack2 = []
    nodes_stack1.append(root)

    while len(nodes_stack1):
        node = nodes_stack1.pop()
        nodes_stack2.append(node)

        if node[1] >= 0:
            nodes_stack1.append(get_node(tree, node[1]))
        if node[2] >= 0:
            nodes_stack1.append(get_node(tree, node[2]))

    while len(nodes_stack2):
        tracker.append(nodes_stack2.pop()[0])


def traverse_pre_order(tree, node, tracker):
    tracker.append(node[0])
    if node[1] >= 0:
        traverse_pre_order(tree, tree[node[1]], tracker)
    if node[2] >= 0:
        traverse_pre_order(tree, tree[node[2]], tracker)


def traverse_in_order(tree, node, tracker):
    if node[1] >= 0:
        traverse_in_order(tree, tree[node[1]], tracker)
    tracker.append(node[0])
    if node[2] >= 0:
        traverse_in_order(tree, tree[node[2]], tracker)


def traverse_post_order(tree, node, tracker):
    if node[1] >= 0:
        traverse_post_order(tree, tree[node[1]], tracker)
    if node[2] >= 0:
        traverse_post_order(tree, tree[node[2]], tracker)
    tracker.append(node[0])


if __name__ == '__main__':
    line_number = 0
    number_of_vertices = 0
    tree = []

    sentinel = '\n' # ends when self string is seen
    for line in iter(raw_input, sentinel):
        line_number += 1
        if line_number == 1:
            number_of_vertices = int(line)
        else:
            tree.append(map(int, line.split(' ')))
            if line_number == number_of_vertices + 1:
                traverse_by_each_method(tree)
                sys.exit()


