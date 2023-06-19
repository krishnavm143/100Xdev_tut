const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const result = []

    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num)
        }
    }

    return result
}

const ar1 = [1, 2, 2, 1, 1, 3]
const ar2 = [5, 2, 2, 4, 1, 3]
const intersectionArray = intersection(ar1, ar2)
console.log(intersectionArray)
