from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans


async def cluster_topics(comments: list[str], num_clusters: int = 5, top_n_keywords: int=1):
    vectorizer = TfidfVectorizer(stop_words="english")
    X = vectorizer.fit_transform(comments)
    feature_names = vectorizer.get_feature_names_out()

    kmeans = KMeans(n_clusters=num_clusters, random_state=42, n_init=10)
    kmeans.fit(X)

    order_centroids = kmeans.cluster_centers_.argsort()[:, ::-1]  # highest tf-idf first
    cluster_keywords = []
    
    for i in range(num_clusters):
        keywords = [feature_names[ind] for ind in order_centroids[i, :top_n_keywords]]
        cluster_keywords.append("_".join(keywords))

    clustered = {keyword: [] for keyword in cluster_keywords}
    for idx, label in enumerate(kmeans.labels_):
        clustered[cluster_keywords[label]].append(comments[idx])

    return clustered
